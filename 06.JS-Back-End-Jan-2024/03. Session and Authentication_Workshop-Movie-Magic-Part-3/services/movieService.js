const Movie = require("../models/Movie");
const Cast = require("../models/Cast");
const User = require("../models/User");

async function getAll() {
  return await Movie.find({}).lean();
}

async function getById(id) {
  return await Movie.findById(id).populate("castList").lean();

}

async function create(userId, movie) {

  const itemCreate = await Movie.create(movie);

  await User.findByIdAndUpdate({ _id: userId }, { $push: { createdMovies: itemCreate._id } }, { new: true });

  return itemCreate;
}

async function addCast(movieId, castId, userId) {
  await Movie.findByIdAndUpdate({ _id: movieId }, { $push: { castList: castId } }, { new: true });
  await Cast.findByIdAndUpdate({ _id: castId }, { $push: { movieList: movieId } }, { new: true });
  await User.findByIdAndUpdate({ _id: userId }, { $push: { createdCasts: castId } }, { new: true });

}


async function deleteById(id) {
  return await Movie.findByIdAndDelete(id);


}

async function updateById(id, movie) {
  const existing = await Movie.findById(id)

  existing.title = movie.title;
  existing.genre = movie.genre;
  existing.director = movie.director;
  existing.year = Number(movie.year);
  existing.imageURL = movie.imageURL || undefined;
  existing.rating = Number(movie.rating);
  existing.description = movie.description;


  await existing.save()

}




module.exports = {
  getAll,
  getById,
  create,
  addCast,
  deleteById,
  updateById
};
