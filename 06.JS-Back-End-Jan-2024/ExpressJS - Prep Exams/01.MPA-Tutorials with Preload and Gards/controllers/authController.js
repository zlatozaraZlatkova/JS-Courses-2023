const router = require("express").Router();
const validator = require("validator");

const { login, register } = require("../services/authService.js");
const { parseError } = require("../utils/parser");



router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
});

router.post("/login", async (req, res) => {
  try {

    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required");
    }


    const token = await login(req.body.username, req.body.password);


    res.cookie("jwt", token, { maxAge: 3600000 });


    res.redirect("/");

  } catch (error) {
    const errors = parseError(error);

    res.render("login", {
      title: "Login Page",
      errors,
      body: {

        username: req.body.username,
      },

    });
  }
});

router.get("/register", (req, res) => {

  res.render("register", {
    title: "Register Page",
  });
});

router.post("/register", async (req, res) => {

  try {

    if (validator.isEmpty(req.body.username) || validator.isEmpty(req.body.password)) {
      throw new Error("All fields are required");
    }

    if (!(validator.isLength(req.body.password, { min: 5 }))) {
      throw new Error("Password should be at least 5 characters");
    }
    if (!(validator.isAlphanumeric(req.body.password))) {
      throw new Error("Password should consist only english letters and digits");
    }


    if (validator.equals(req.body.password, req.body.rePassword) == false) {
      throw new Error("Passwords don't match");

    }


    const token = await register(req.body.username, req.body.password);


    res.cookie("jwt", token, { maxAge: 3600000 });


    res.redirect("/");

  } catch (error) {

    const errors = parseError(error);

    res.render("register", {
      title: "Register Page",
      errors,
      body: {

        username: req.body.username

      },
    });
  }
});



router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("/");
});

module.exports = router;


