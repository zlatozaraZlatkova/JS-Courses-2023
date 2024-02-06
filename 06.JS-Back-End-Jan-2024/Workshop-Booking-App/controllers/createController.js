const router = require("express").Router();
const { create } = require("../services/accommodationService");
const { parseError } = require('../utils/parser');

router.get("/", (req, res) => {
  res.render("create", {
    title: "Host New Accommodation",
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await create(req.body, req.user._id, req.user.username);
    res.redirect("/catalog/" + result._id);
    
  } catch (error) {
    res.render("create", {
      title: "Request Error",
      body: req.body,
      error: parseError(error),
    });
  }
});

module.exports = router;
