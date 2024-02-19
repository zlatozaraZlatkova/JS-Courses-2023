const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const defaultController = require("../controllers/defaultController");
const catalogController = require("../controllers/catalogController");


module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/catalog", catalogController);
 

  app.use(defaultController);

};

