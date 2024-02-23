const homeController = require("../controllers/homeController");
const hotelController = require("../controllers/hotelController");
const authController = require("../controllers/authController");
const profileController = require("../controllers/profileController");

const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/hotel", hasUser(), hotelController);
  app.use("/auth", authController);
  app.use("/profile", profileController);

};


