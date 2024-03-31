const Cast = require("../models/Cast")

async function getAllCasts() {
  return await Cast.find({}).lean();
}

async function getByIdCast(id) {
  return await Cast.findById(id).lean();
}

async function createCast(cast) {
  return await Cast.create(cast);
}




module.exports = {
  getAllCasts,
  getByIdCast,
  createCast,
};
