function hasUser() {
  return (req, res, next) => {
    if (req.user != undefined) {
      next();
    } else {
      //TODO redirect to correct path
      res.status(401).redirect("/auth/login");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user != undefined) {
      //TODO redirect to correct path
      res.redirect("/");
    } else {
      next();
    }
  };
}

function hasRole(role) {
  return (req, res, next) => {
    if (req.user == undefined) {
      //TODO redirect to correct path
      res.status(401).redirect("/auth/login");
    } else {
      if (req.user.roles.includes(role) == false) {
        //TODO redirect to correct path
        res.redirect("404");
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
