const router = require("express").Router();
const { getAll } = require("../services/catalogService");

router.get("/", async (req, res) => {
  const coins = await getAll();
  res.render("home", {
    title: "Home Page",
    coins,
  });
});

module.exports = router;
