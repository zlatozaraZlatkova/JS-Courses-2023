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

function hasRole() {
  return (req, res, next) => {
    if (req.user == undefined) {
      res.status(401).redirect("/");
    } else {
      if (req.user.roles.includes(role) == false) {
        res.status(403).redirect("/login");
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
