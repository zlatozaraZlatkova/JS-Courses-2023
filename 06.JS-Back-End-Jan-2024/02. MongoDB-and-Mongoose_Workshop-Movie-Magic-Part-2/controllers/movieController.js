const router = require("express").Router();
const { getById, create, addCast } = require("../services/movieService");
const { getAllCasts } = require("../services/castService");

router.get("/details/:id", async (req, res) => {
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

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/create", async (req, res) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    director: req.body.director,
    year: Number(req.body.year),
    imageURL: req.body.imageURL,
    rating: Number(req.body.rating),
    description: req.body.description,
  };

  try {
    await create(movie);

    res.redirect("/");
  } catch (err) {
    res.render("create", {
      title: "Request Error",
      error: err.message,
      body: movie,
    });
  }
});

router.get("/details/:id/attach", async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);
  const casts = await getAllCasts();

  try {
    res.render("./cast/castAttach", {
      movie,
      casts,
    });
  } catch (err) {
    res.render("./cast/castAttach", {
      title: "Request Error",
      error: err.message,
      body: movie,
    });
  }
});

router.post("/details/:id/attach", async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);

  const castId = req.body.cast;

  const casts = await getAllCasts();

  try {
    const isIdExisted = movie.castList
      .map((c) => c._id.toString())
      .includes(castId.toString());

    if (isIdExisted == true) {
      throw new Error("Cannot add cast twice");
    }

    await addCast(movieId, castId);

    res.render("./cast/castAttach", {
      movie,
      casts,
    });
  } catch (err) {
    res.render("./cast/castAttach", {
      title: "Request Error",
      error: err.message,
      movie,
      casts,
    });
  }
});

module.exports = router;
