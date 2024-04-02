const router = require("express").Router();

const { getLastThree } = require("../services/catalogService");


router.get("/", async(req, res) => {
  const courses = await getLastThree();
  res.render("home", {
    title: "Home Page",
    courses
  });
});

module.exports = router;