const { create } = require("../services/movieService");

const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/create", async (req, res) => {
  try {
    const result = await create(req.body);

    res.redirect(`/details/${result.id}`);
  } catch (err) {
    res.render("create", {
      error: err.message,
    });
  }
});

module.exports = router;
