const { getAll, getById } = require("../services/accommodationService");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const user = req.user;

  const search = req.query.search || "";
  const city = req.query.city || "";
  const fromPrice = Number(req.query.fromPrice) || 1;
  const toPrice = Number(req.query.toPrice) || 1000;

  const rooms = await getAll(search, city, fromPrice, toPrice);

  res.render("catalog", {
    title: "All Accommodation",
    rooms,
    search,
    city,
    fromPrice,
    toPrice,
  });
});

router.get("/:id", async (req, res) => {
  const roomId = req.params.id;
  const room = await getById(roomId);

  if (room) {
    if (req.user && req.user._id == room.owner) {
      room.isOwner = true;
    } 
    res.render("details", {
      title: res.locals.title,
      room,
    });
    
  } else {
    res.render("roomNotFound", {
      title: res.locals.title,
      roomId,
    });
  }
});

module.exports = router;
