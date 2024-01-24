const router = require("express").Router();
const { getAllSearches } = require("../services/searchServices");

router.get("/", (req, res) => {
  const search = req.query.search || "";
  const genre = req.query.genre || "";
  const year = Number(req.query.year) || "";

  const movies = getAllSearches(search, genre, year);

  res.render("search", {
    title: "Search Page",
    movies,
    search,
    genre,
    year,
  });
});

module.exports = router;
