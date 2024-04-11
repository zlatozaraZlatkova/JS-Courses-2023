const router = require("express").Router();
const validator = require("validator");

const { login, register } = require("../services/authService.js");
const { parseError } = require("../utils/parser");
const { hasUser, isGuest } = require("../middlewares/guards.js");

router.get("/login", isGuest(), (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required");
    }

    const token = await login(req.body.email, req.body.password);

    res.cookie("jwt", token, { httpOnly: true }, { maxAge: 3600000 });

    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);

    res.render("login", {
      title: "Login",
      body: {
        email: req.body.email,
      },
      errors,
    });
  }
});

router.get("/register", isGuest(), (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (validator.isEmpty(req.body.email) || validator.isEmpty(req.body.password)) {
      throw new Error("All fields are required");
    }

    if (validator.isLength(req.body.username, { min: 2 }) == false) {
      throw new Error("Username should be at least 2 characters");
    }

    if (validator.isEmail(req.body.email) == false) {
      throw new Error("Invalid email!");
    }

    if (validator.isLength(req.body.email, { min: 10 }) == false) {
      throw new Error("Email should be at least 10 characters long");
    }

    if (validator.isLength(req.body.password, { min: 4 }) == false) {
      throw new Error("Password should be at least 4 characters long");
    }

    if (validator.equals(req.body.password, req.body.rePassword) == false) {
      throw new Error("Passwords don't match");
    }

    const token = await register(
      req.body.email,
      req.body.username,
      req.body.password
    );

    res.cookie("jwt", token, { httpOnly: true }, { maxAge: 3600000 });

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

router.get("/logout", hasUser(), (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("/");
});

module.exports = router;
