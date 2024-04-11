const router = require("express").Router();

const { getAll, getLastThree } = require("../services/catalogService");

router.get("/", async(req, res) => {
  const stones = await getLastThree();
  
  res.render("home", {
    title: "Home Page",
    stones
  });
});


router.get("/catalog", async (req, res) => {
  const stones = await getAll();

  res.render("catalog", {
    title: "Catalog Page",
    user: req.user,
    stones
  })

})

router.get("/search", async(req, res) => {
  const stones = await getAll(req.query.search);
  res.render("search", {
    title: "Search Page", 
    stones
  })
})

module.exports = router;