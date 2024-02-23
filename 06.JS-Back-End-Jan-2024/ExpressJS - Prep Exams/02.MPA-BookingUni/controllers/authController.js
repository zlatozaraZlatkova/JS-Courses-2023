const router = require("express").Router();
const validator = require("validator");

const { login, register } = require("../services/authService.js");
const { parseError } = require("../utils/parser");


router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login", async (req, res) => {
  try {

    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required");
    }


    const token = await login(req.body.email, req.body.password);


    res.cookie("jwt", token, { maxAge: 3600000 });


    res.redirect("/");

  } catch (error) {
    const errors = parseError(error);

    res.render("login", {
      title: "Login",
      body: {

        email: req.body.email,
        username: req.body.username,
      },
      errors,
    });
  }
});

router.get("/register", (req, res) => {

  res.render("register", {
    title: "Register",
  });
});

router.post("/register", async (req, res) => {

  try {

    if (validator.isEmpty(req.body.email) || validator.isEmpty(req.body.username) || validator.isEmpty(req.body.password)) {
      throw new Error("All fields are required");
    }

    if (!(validator.isLength(req.body.password, { min: 5 }))) {
      throw new Error("Password must be at least 5 characters");
    }

    //TODO check in html field name >> name="rePassword"
    if (validator.equals(req.body.password, req.body.rePassword) == false) {
      throw new Error("Passwords don't match");

    }


    const token = await register(req.body.email, req.body.username, req.body.password);


    res.cookie("jwt", token, { maxAge: 3600000 });


    res.redirect("/");

  } catch (error) {

    const errors = parseError(error);


    res.render("register", {
      title: "Register",
      errors,
      body: {

        email: req.body.email,

      },
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("/");
});

module.exports = router;
