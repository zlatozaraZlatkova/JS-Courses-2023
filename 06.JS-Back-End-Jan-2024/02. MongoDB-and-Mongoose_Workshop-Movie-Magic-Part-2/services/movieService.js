const Movie = require("../models/Movie");
const Cast = require("../models/Cast");

async function getAll() {
  return await Movie.find({}).lean();
}

async function getById(id) {
  return await Movie.findById(id).populate("castList").lean();
}

async function create(movie) {
  return await Movie.create(movie);
}

async function addCast(movieId, castId) {
  await Movie.findByIdAndUpdate({_id: movieId}, {$push: {castList: castId}}, {new: true});
  await Cast.findByIdAndUpdate({_id: castId}, {$push: {movieList: movieId}}, {new: true});


}




module.exports = {
  getAll,
  getById,
  create,
  addCast
};
