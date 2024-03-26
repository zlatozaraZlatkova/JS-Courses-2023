const express = require("express");

const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });

const defaultTitle = require("../middlewares/defaultTitle");


module.exports = (app) => {
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
  /**req.body*/
  app.use(express.urlencoded({ extended: false }));

  /**static */
  app.use("/static", express.static("static"));

  app.use(defaultTitle("Movie Magic"));
}