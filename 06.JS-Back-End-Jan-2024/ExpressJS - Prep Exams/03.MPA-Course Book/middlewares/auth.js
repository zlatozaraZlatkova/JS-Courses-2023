const { verifyToken } = require("../services/authService");

module.exports = () => (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      const userData = verifyToken(token);
      console.log("Read successful token from user:", userData.username);

      req.user = userData;

      res.locals.username = userData.username;

      res.locals.user = userData;
    } catch (error) {
      res.clearCookie("jwt");

      res.redirect("/auth/login");

      return;
    }
  }

  next();
};
