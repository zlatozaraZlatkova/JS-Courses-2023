const User = require("../models/User");

async function getUserInfo(id) {
  // populate multiple fields
  return User.findById(id).populate(["createdCourses" , "signedUpCourses"]).lean();
  
}

module.exports = {
  getUserInfo,
}