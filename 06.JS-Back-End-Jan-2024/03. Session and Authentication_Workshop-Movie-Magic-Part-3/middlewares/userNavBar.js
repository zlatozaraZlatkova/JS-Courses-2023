module.exports =() => (req, res, next) => {
  res.locals.hsUser = req.user != undefined;

  if(req.user != undefined) {
    res.locals.hasUser = true;
    res.locals.username = req.user.username;
  }


  next();
}
