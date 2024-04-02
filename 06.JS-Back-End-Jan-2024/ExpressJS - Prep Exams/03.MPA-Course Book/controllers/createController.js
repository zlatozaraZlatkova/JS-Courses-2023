const router = require("express").Router();

const { createItem } = require("../services/catalogService");
const { parseError } = require("../utils/parser");

router.get("/", (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/", async (req, res) => {
  const course = {
    title: req.body.title,
    type: req.body.type,
    certificate: req.body.certificate,
    image: req.body.image,
    description: req.body.description,
    price: Number(req.body.price),
    owner: req.user._id,
  };

  try {
    if (Object.values(course).some((x) => !x)) {
      throw new Error("All fields are required");
    }

    await createItem(req.user._id, course);

    res.redirect("/catalog");
  } catch (error) {
    const errors = parseError(error);

    res.render("create", {
      title: "Request Error",
      errors,

      body: course,
    });
  }
});

module.exports = router;
