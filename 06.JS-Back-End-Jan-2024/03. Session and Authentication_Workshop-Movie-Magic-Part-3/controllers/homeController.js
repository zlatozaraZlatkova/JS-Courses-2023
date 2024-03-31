const { getAll } = require("../services/movieService");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const movies = await getAll();
  res.render("home", {
    movies,
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});



module.exports = router;
