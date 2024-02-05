const { getById, deleteById } = require("../services/accommodationService");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const roomId = req.params.id;
  const room = await getById(roomId);

  if (room) {
    if (!req.user || room.owner != req.user._id) {
      return res.redirect("/auth/login");
    }

    res.render("delete", {
      title: "Delete Accommodation",
      room
    });

  } else {
    return res.status(404).render("roomNotFound", {
      title: "Accommodation Not Found",
      roomId
    });

  }
});

router.post('/:id', async (req, res) => {
  const roomId = req.params.id;
  const room = await getById(roomId);

  if (!req.user || room.owner != req.user._id) {
    return res.redirect('/auth/login');
  }

  try {
    await deleteById(roomId);
    res.redirect('/catalog');

  } catch (err) {
    req.body._id = roomId;

    res.render('delete', {
      title: 'Delete Accommodation',
      error: err.message.split('\n'),
      room: req.body
    });
  }
});


module.exports = router;
