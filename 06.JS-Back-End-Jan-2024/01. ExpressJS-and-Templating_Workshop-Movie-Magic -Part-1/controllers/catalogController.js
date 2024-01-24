const { getAll, getById } = require("../services/movieService");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const movies = await getAll();
  res.render("catalog", {
    movies,
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});

router.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);

  if (movie) {
    const stars = new Array(movie.rating).fill("true");
    const amendedMovie = Object.assign({}, movie, { stars: stars });

    res.render("details", {
      title: "Details Page",
      amendedMovie,
    });
  } else {
    res.render("404", {
      title: "404 Page",
    });
  }
});

module.exports = router;
