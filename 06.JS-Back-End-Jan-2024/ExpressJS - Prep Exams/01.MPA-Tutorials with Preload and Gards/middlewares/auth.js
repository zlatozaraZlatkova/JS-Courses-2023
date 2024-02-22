const { verifyToken } = require("../services/authService");

module.exports = () => (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      const userData = verifyToken(token);
      req.user = userData;
      res.locals.username = userData.username;
      
    } catch (error) {
      res.clearCookie("jwt");

      res.redirect("/auth/login");
      return;
    }
  }

  next();
};