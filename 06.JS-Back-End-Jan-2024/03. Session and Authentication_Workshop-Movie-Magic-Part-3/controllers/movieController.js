const router = require("express").Router();
const { getById, create, addCast, updateById, deleteById } = require("../services/movieService");
const { getAllCasts } = require("../services/castService");

const { hasUser } = require("../middlewares/guards");

router.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Page",
  });
});

router.post("/create", hasUser(), async (req, res) => {
  const userId = req.user._id;

  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    director: req.body.director,
    year: Number(req.body.year),
    imageURL: req.body.imageURL,
    rating: Number(req.body.rating),
    description: req.body.description,
    owner: req.user._id,
  };

  //console.log(movie)
  try {
    await create(userId, movie);

    res.redirect("/");
  } catch (err) {
    res.render("create", {
      title: "Request Error",
      error: err.message,
      body: movie,
    });
  }
});

router.get("/details/:id", async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);

  if (req.user) {
    if (movie.owner == req.user._id) {
      movie.isOwner = true;
    }
  }

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

router.get("/details/:id/attach", hasUser(), async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);
  const casts = await getAllCasts();
  if (movie.owner != req.user._id) {
    res.redirect("/");
  }

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

router.post("/details/:id/attach", hasUser(), async (req, res) => {
  const movieId = req.params.id;
  const movie = await getById(movieId);
  const userId = req.user._id;
  //console.log(movie)

  if (movie.owner != req.user._id) {
    res.redirect("/");
  }

  //<select id="cast" name="cast">
  const castId = req.body.cast;
  
  const casts = await getAllCasts();


  try {
    const isIdExisted = movie.castList
      .map((c) => c._id.toString())
      .includes(castId.toString());
    

    if (isIdExisted == true) {
      throw new Error("Cannot add cast twice");
    }

    await addCast(movieId, castId, userId);

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

router.get("/details/:id/edit", hasUser(), async (req, res) => {
  const movie = await getById(req.params.id);

  if (movie.owner != req.user._id) {
    res.redirect("/");
  }

  res.render("edit", {
    title: "Edit Page",
    movie,
  });
});

router.post("/details/:id/edit", hasUser(), async (req, res) => {
  const movieId = await getById(req.params.id);

  if (movieId.owner != req.user._id) {
    res.redirect("/");
  }

  try {
    await updateById(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    res.render("edit", {
      title: "Request Error",
      error: err.message,
      movie: req.body,
    });
  }
});

router.get("/details/:id/delete", hasUser(), async (req, res) => {
  const movieId = await getById(req.params.id);
  if (movieId.owner != req.user._id) {
    res.redirect("/");
  }

  try {
    await deleteById(movieId);
    res.redirect("/");
  } catch (err) {
    res.render("details", {
      title: "Request Error",
      error: err.message,
    });
  }
});

module.exports = router;
