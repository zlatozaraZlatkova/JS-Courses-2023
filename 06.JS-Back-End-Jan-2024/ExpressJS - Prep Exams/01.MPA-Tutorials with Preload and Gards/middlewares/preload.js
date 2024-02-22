const { getById, getByIdRaw } = require("../services/catalogService");

module.exports = (lean) => async (req, res, next) => {
  if (lean) {
    const course = await getById(req.params.id);
    res.locals.course = course;
  } else {
    const course = await getByIdRaw(req.params.id);
    res.locals.course = course;
  }

  next();
};
