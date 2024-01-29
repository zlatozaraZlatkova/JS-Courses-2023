const homeController = require("../controllers/homeController");
const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const defaultController = require("../controllers/defaultController");
const deleteController = require("../controllers/deleteController");
const activityController = require("../controllers/activityController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/catalog", catalogController);
  app.use("/create", createController);
  app.use("/delete", deleteController);
  app.use("/activity", activityController);

  app.use(defaultController);
};
