const router = require("express").Router();
const { getAll } = require("../services/catalogService");

router.get("/", async (req, res) => {
  const volcanoes = await getAll();
  res.render("home", {
    title: "Home Page",
    volcanoes,
  });
});

module.exports = router;
