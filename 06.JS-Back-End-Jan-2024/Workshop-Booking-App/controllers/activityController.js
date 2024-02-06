const router = require("express").Router();
 const { body, validationResult } = require("express-validator");

const { getById } = require("../services/accommodationService.js");
const { getAllActivities, createActivity, addActivities } = require("../services/activityService.js");
const { hasRole } = require("../middlewares/guards.js")
const { parseError } = require("../utils/parser.js");


router.get("/create", hasRole("admin"), (req, res) => {
  res.render("createActivity", {
    title: "Create New Activity",
  });
});



router.post("/create", hasRole("admin"),
  body("label").trim().notEmpty().withMessage("Label is required"),
  body("iconUrl").trim(),

  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      await createActivity(req.body.label, req.body.iconUrl);

      res.redirect("/catalog");
      
    } catch (error) {
   
      res.render("createActivity", {
        title: "Create New Activity",
        body: req.body,
        error: parseError(error),
      });
    }
  }
);


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
