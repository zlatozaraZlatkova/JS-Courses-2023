const { getById, update } = require("../services/accommodationService");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const roomId = req.params.id;
  const room = await getById(roomId);

  if (room) {
    if (!req.user || room.owner != req.user._id) {
      return res.redirect("/auth/login");
    }

    res.render("edit", {
      title: "Edit Accommodation",
      room,
    });
    
  } else {
    return res.render("roomNotFound", {
      title: res.locals.title,
      roomId,
    });
  }
});

router.post("/:id", async (req, res) => {
  const roomId = req.params.id;
  const room = await getById(roomId);

  if (!req.user || room.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  try {
    const result = await update(roomId, req.body);
    res.redirect("/catalog/" + result._id);

  } catch (err) {
    req.body._id = roomId;

    res.render("edit", {
      title: "Edit Accommodation",
      error: err.message.split("\n"),
      room: req.body,
      roomId,
    });
  }
});

module.exports = router;
