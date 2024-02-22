const router = require("express").Router();

const { parseError } = require("../utils/parser");
const { createCourse, getById, deleteById, updateById, enrollUser } = require("../services/catalogService");


const preload = require("../middlewares/preload");
const { isOwner } = require("../middlewares/guards");



router.get("/:id/details", preload(true), async (req, res) => {
  const course = res.locals.course;

  if (course.owner.toString() == req.user._id.toString()) {
    course.isOwner = true;
  }

  const isBooked = course.users.some(user => user.equals(req.user._id));

  if (isBooked == true) {
    course.enrolled = true;
  }

  res.render("details", {
    title: course.title,
    course,
  });
});


router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/create", async (req, res) => {
  const course = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    duration: req.body.duration,
    owner: req.user._id,
  };
  try {

    if (Object.values(course).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await createCourse(course);
    res.redirect("/");
  } catch (err) {
    const errors = parseError(err);

    res.render("create", {
      title: "Request Error",
      errors,
      body: course,
    });
  }
});



router.get("/:id/edit", preload(true), isOwner(), async (req, res) => {
  const course = res.locals.course;

  res.render("edit", {
    title: "Edit Page",
    course,
  });
});


router.post("/:id/edit", preload(), isOwner(), async (req, res) => {
  const courseId = req.params.id;
  const course = res.locals.course;
  const edited = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    duration: req.body.duration,
  };


  try {
    if (Object.values(edited).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await updateById(course, edited);

    res.redirect(`/catalog/${courseId}/details`);

  } catch (error) {
    const errors = parseError(error);

    res.render("/:id/edit", {
      title: "Request Error",
      errors,
      course: Object.assign(edited, { _id: courseId }),
    });
  }
});



router.get("/:id/delete", preload(true), isOwner(), async (req, res) => {
  const course = res.locals.course;
  await deleteById(course);
  res.redirect("/");
});


router.get("/:id/enroll", preload(), async (req, res) => {
  const userId = req.user._id;
  const courseId = req.params.id;
  const course = res.locals.course;

  try {
    if (course.owner.toString() != userId.toString() && course.users.map((c) => c.toString()).includes(userId.toString()) == false) {
      await enrollUser(course, userId);
    }

    res.redirect(`/catalog/${courseId}/details`);


  } catch (error) {
    const errors = parseError(error);
    res.render("details", {
      title: "Reference Error",
      errors,
    });
  }
});


module.exports = router;
