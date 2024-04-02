const router = require("express").Router();

const { getAll, getById, updateById, deleteById, enrollUser, getByIdDetailed } = require("../services/catalogService");
const { parseError } = require("../utils/parser");
const { hasUser } = require("../middlewares/guards");


router.get("/", async (req, res) => {
  const courses = await getAll();
  res.render("catalog", {
    title: "Catalog Page",
    courses
  });
});

//DETAILS
router.get("/:id/details", async (req, res) => {
  const course = await getByIdDetailed(req.params.id);
  course.ownerEmail = course.owner.email;
  const singUpUsers = course.singUpList.map(user => user.username).join(", ");

  if (req.user) {
    if (course.owner._id.toString() == req.user._id.toString()) {
      course.isOwner = true;
    }

    const isSignup = course.singUpList.some(user => user._id == req.user._id);

    if (isSignup == true) {
      course.enrolled = true;
    }

  }

  res.render("details", {
    title: course.title,
    course,

    singUpUsers,

  });
});



router.get("/:id/edit", hasUser(), async (req, res) => {
  const course = await getById(req.params.id);
  console.log(req.params.id)
  console.log(course)

  if (course.owner.toString() != req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  res.render("edit", {
    title: "Edit Page",
    course,
  });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  const courseId = req.params.id;
  const course = await getById(courseId);

  if (course.owner.toString() != req.user._id.toString()) {
    return req.render("/auth/login");
  }

  const edited = {
    title: req.body.title,
    type: req.body.type,
    certificate: req.body.certificate,
    image: req.body.image,
    description: req.body.description,
    price: Number(req.body.price)
  };


  try {

    if (Object.values(edited).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await updateById(courseId, edited);

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


router.get("/:id/delete", hasUser(), async (req, res) => {
  const course = await getById(req.params.id);

  if (course.owner.toString() != req.user._id.toString()) {
    return res.redirect("/auth/login");
  }

  await deleteById(course);
  res.redirect("/");
});



router.get("/:id/enroll", hasUser(), async (req, res) => {
  const userId = req.user._id;
  const courseId = req.params.id;
  const course = await getById(courseId);

  try {
    if (course.owner.toString() != userId.toString() && course.singUpList.map((c) => c.toString()).includes(userId.toString()) == false) {

      await enrollUser(courseId, userId);
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

