const router = require("express").Router();
const { login, register } = require("../services/authService.js");


router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.username.trim() == "" || req.body.password.trim() == "") {
      throw new Error("All fields are required!");
    }

    const result = await login(req.body.username, req.body.password);
    attachToken(req, res, result);
    res.redirect("/");

  } catch (err) {
    res.render("login", {
      title: "Login",
      error: err.message.split("\n"),
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
    if (req.body.username.trim() == "" || req.body.password.trim() == "") {
      throw new Error("All fields are required!");
    }

    if (req.body.password.trim() !== req.body.repass.trim()) {
      throw new Error("Passwords don't match");
    }

    const result = await register(req.body.username.trim(), req.body.password.trim());

    attachToken(req, res, result);
    res.redirect("/");

  } catch (err) {

    res.render("register", {
      title: "Register",
      error: err.message.split("\n"),
    });
  }
});


function attachToken(req, res, data) {
  const token = req.signJwt(data);
  res.cookie("jwt", token, { maxAge: 3600000 });
}


module.exports = router;
