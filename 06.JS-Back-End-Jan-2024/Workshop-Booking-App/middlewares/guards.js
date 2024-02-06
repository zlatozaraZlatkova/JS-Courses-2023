function hasUser() {
  return (req, res, next) => {
    if (req.user != undefined) {
      next();
    } else {
      res.status(401).redirect("/auth/login");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user != undefined) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function hasRole(role) {
  return (req, res, next) => {
    if (req.user == undefined) {
      res.status(401).redirect("/auth/login");
      
    } else {
      if (req.user.roles.includes(role) == false) {
        res.redirect("/activity/403")
      }

      next();
    }
  };
}

module.exports = {
  hasUser,
  isGuest,
  hasRole,
};
