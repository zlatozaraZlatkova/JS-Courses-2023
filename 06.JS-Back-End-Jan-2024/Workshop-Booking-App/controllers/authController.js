const router = require("express").Router();
const { body, validationResult } = require("express-validator");

const { login, register } = require("../services/authService.js");
const { parseError } = require('../utils/parser');


router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login",
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("password").trim().notEmpty().withMessage("Password is required"),
  async (req, res) => {
    const { errors } = validationResult(req);

    try {
      
      if (errors.length > 0) {
        throw errors;
      }

      const result = await login(req.body.username, req.body.password);

      attachToken(req, res, result);
      res.redirect("/");

    } catch (error) {
      res.render("login", {
        title: "Login",
        body: {
          username: req.body.username
        },
        error: parseError(error)
      });
    }
  }
);

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

router.post(
  "/register",
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isAlphanumeric()
    .withMessage("Only english characters are required"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Username must be greater than 6")
    .isLength({ max: 20 })
    .withMessage("Username must be less than 20"),
  body("repass")
    .trim()
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords don't match");
      }

      return true;
    }),

  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      const result = await register(req.body.username.trim(), req.body.password.trim());

      attachToken(req, res, result);
      res.redirect("/");

    } catch (error) {
      res.render("register", {
        title: "Register",
        body: { 
          username: req.body.username 
        },
        error: parseError(error),
      });
    }
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("/");
});

function attachToken(req, res, data) {
  const token = req.signJwt(data);
  res.cookie("jwt", token, { maxAge: 3600000 });
}

module.exports = router;
