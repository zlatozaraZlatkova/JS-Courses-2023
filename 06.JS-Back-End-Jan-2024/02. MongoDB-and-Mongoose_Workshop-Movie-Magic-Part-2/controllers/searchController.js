const router = require("express").Router();
const { getAllSearches } = require("../services/searchServices");

router.get("/", async (req, res) => {
  const title = req.query.title || "";
  const genre = req.query.genre || "";
  const year = Number(req.query.year) || "";

  try {
    const movies = await getAllSearches(title, genre, year);

    res.render("search", {
      title: "Search Page",
      movies,
      title,
      genre,
      year,
    });
    
  } catch (err) {
    res.render("search", {
      title: "Request Error",
      error: err.message,
      movies,
      title,
      genre,
      year,
    })


  }
});

module.exports = router;
