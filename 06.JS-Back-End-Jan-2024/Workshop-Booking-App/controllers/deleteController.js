const { getById, deleteById } = require("../services/accommodationService");

const router = require("express").Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const room = getById(id);
  if (room) {
    res.render("delete", room);
  } else {
    res.render("roomNotFound", { id });
  }
});

router.post("/:id", async (req, res) => {
  const id = req.params.id;
  await deleteById(id);
  res.redirect("/catalog");
});

module.exports = router;
