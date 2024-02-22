const router = require("express").Router();

const { getAll, getAllByDate } = require("../services/catalogService");

router.get("/", async (req, res) => {
  let view;
  let courses = [];

  if (req.user) {
    view = "user-home";
    courses = await getAllByDate(req.query.search);

  } else {
    courses = await getAll();
    view = "guest-home";
  }

  res.render(view, {
    title: "Home Page",
    courses,
    search: req.query.search
  });


});

module.exports = router;