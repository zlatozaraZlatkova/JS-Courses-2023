const express = require("express");

const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });
const cookieParser = require("cookie-parser");

const auth = require("../middlewares/auth");
const userNav = require("../middlewares/userNavBar");
const defaultTitle = require("../middlewares/defaultTitle");


module.exports = (app) => {
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
  /**req.body*/
  app.use(express.urlencoded({ extended: false }));

  /**static */
  app.use("/static", express.static("static"));

  /**cookies */
  app.use(cookieParser());
  /**auth user middleware */
  app.use(auth());

  /**navbar */
  app.use(userNav());

  

  app.use(defaultTitle("Movie Magic"));
}