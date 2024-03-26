const router = require("express").Router();
const { getAllCasts, getByIdCast, createCast } = require("../services/castService");


router.get("/create", async(req, res) => {
  res.render("./cast/castCreate")
});

router.post("/create", async(req, res) => {
  const cast = {
    name: req.body.name,
    age: Number(req.body.age),
    born: req.body.born,
    nameInMovie: req.body.nameInMovie,
    imageURL: req.body.imageURL,

  }
  try {
    await createCast(cast);
    //`/attach/${cast.id}`
    res.redirect("/");


  } catch(err) {
    res.render("./cast/castCreate", {
      title: "Request Error", 
      error: err.message,
      body: cast
    })


  }

})




module.exports = router;