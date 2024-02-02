const { getById } = require("../services/accommodationService");
const { getAllActivities, createActivity, addActivities } = require("../services/activityService.js");

const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("createActivity", {
    title: "Create New Activity",
  });
});

router.post("/create", async (req, res) => {
  try {
    await createActivity(req.body.label, req.body.iconUrl);

    res.redirect("/catalog");

  } catch (err) {
    // TODO render errors
    res.render("createActivity", {
      title: "Create New Activity",
    });
  }
});

router.get("/:roomId/extras", async (req, res) => {
  const roomId = req.params.roomId;
  const room = await getById(roomId);

  const activities = await getAllActivities();

  activities.forEach((a) => {
    if ((room.activities || []).some((id) => id.toString() == a._id.toString())) {
      a.checked = true;
    }
  });

  console.log(room.activities, activities);

  res.render("extras", {
    title: "Add Activities",
    room,
    activities,
  });
});

router.post("/:roomId/extras", async (req, res) => {
  await addActivities(req.params.roomId, Object.keys(req.body));

  res.redirect("/catalog/" + req.params.roomId);
});

module.exports = router;
