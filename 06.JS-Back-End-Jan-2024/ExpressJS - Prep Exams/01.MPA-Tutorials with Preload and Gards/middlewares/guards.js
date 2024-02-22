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

function isOwner() {
  return (req, res, next) => {
    if (req.user && res.locals.course.owner == req.user._id) {
      res.locals.isOwner = true;
      next();
    } else {
      res.redirect("/auth/login");
    }
  };
}

module.exports = {
  hasUser,
  isGuest,
  isOwner,
};
