const router = require("express").Router();

const { login, register } = require("../services/authService");


router.get("/register",  (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
});


router.post("/register", async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "" || req.body.rePass == "") {
      throw new Error("All fields are required");
    }
    if (req.body.password != req.body.rePass) {
      throw new Error("Passwords don't match");
    }

    const token = await register(
      req.body.email,
      req.body.password
    );


    res.redirect("/auth/login");

  } catch (err) {
    

    res.render("register", {
      title: "Request Error",
      error: err.message,
      body: {
        email: req.body.email,
      },
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
});

router.post("/login", async (req, res) => {
  try {

    if (req.body.email == "" || req.body.password == "") {
      throw new Error("All fields are required");
    }
 
    const token = await login(req.body.email, req.body.password);
    
    //! IMPORTANT {httpOnly: true}
    res.cookie("jwt", token, { httpOnly: true }, { maxAge: 360000 });

    res.redirect("/");

  } catch (err) {
  
    res.render("login", {
      title: "Request Error",
      error: err.message,
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