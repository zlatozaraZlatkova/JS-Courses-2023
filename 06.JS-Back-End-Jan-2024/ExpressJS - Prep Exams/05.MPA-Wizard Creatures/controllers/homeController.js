const { getUserInfo } = require("../services/catalogService");

const router = require("express").Router();


router.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
 
});


router.get("/profile", async(req, res) => {
  try {
    const userPosts = await getUserInfo(req.user._id);
   
    res.render("profile", {
      title: "Profile Page",
      userPosts,
    
    });
  
  } catch (err) {
    const errors = parseError(err);
    res.render("details", {
      title: "Request Error",
      errors,
    })
  }

  

 
});

module.exports = router;


