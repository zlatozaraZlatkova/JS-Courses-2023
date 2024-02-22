const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");

const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/catalog", hasUser(), catalogController);

};