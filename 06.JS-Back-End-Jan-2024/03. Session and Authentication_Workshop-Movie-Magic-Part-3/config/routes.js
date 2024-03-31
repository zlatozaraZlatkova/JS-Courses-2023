const homeController = require("../controllers/homeController")
const movieController = require("../controllers/movieController");
const castController = require("../controllers/castController")
const searchController = require("../controllers/searchController");
const authController = require("../controllers/authController");
const defaultController = require("../controllers/defaultController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/movies", movieController);
  app.use("/cast", castController);
  app.use("/search", searchController);
  app.use("/auth", authController);
 

  //Default page - 404 Not Found
  app.all("*", defaultController);
};
