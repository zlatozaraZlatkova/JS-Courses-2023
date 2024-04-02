const router = require("express").Router();

const { getUserInfo } = require("../services/profileService");
const { parseError } = require("../utils/parser");


router.get("/", async (req, res) => {
  try {

    const user = await getUserInfo(req.user._id);
    console.log(user)

    const createdCoursesCount = user.createdCourses.length;
    const singUpCoursesCount = user.signedUpCourses.length;

    console.log(createdCoursesCount)
    console.log(singUpCoursesCount)

    res.render("profile", {
      title: "Profile Page",
      user,
      createdCoursesCount,
      singUpCoursesCount
    })


  } catch (error) {
    const errors = parseError(error);
    res.render("profile", {
      title: "Request Error",
      errors,
      body: {
        user,
        createdCoursesCount,
        singUpCoursesCount
      }
    })
  }

})

module.exports = router