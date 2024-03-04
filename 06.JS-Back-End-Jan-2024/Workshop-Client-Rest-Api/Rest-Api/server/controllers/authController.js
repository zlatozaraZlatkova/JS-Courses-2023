const router = require("express").Router();
const { body, validationResult } = require("express-validator");

const { register, login, logout } = require("../services/authService");
const { parseError } = require("../utils/parser");

router.post("/register",
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      const token = await register(req.body.email, req.body.password);
      res.json(token);
      
    } catch (error) {
      //! Cline -> api.js -> request(url, options) -> Error(error.message)
      const message = parseError(error);

      res.status(400).json({ message });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    const message = parseError(error);
    res.status(401).json({ message });
  }
});

router.get("/logout", async (req, res) => {
  //! const token = req.headers["x-authorization"]
  const token = req.token;

  await logout(token);
  res.status(204).end();
});

module.exports = router;
