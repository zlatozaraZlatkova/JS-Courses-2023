const Movie = require("../models/Movie");
const Cast = require("../models/Cast");

async function getAll() {
  return await Movie.find({}).lean();
}

async function getById(id) {
  //! populate take data form reference
  return await Movie.findById(id).populate("castList").lean();

  //при изтриване без да изтриваме данните в БД
  //await Movie.findById(id).where({isDeleted: false}).populate("castList")
}

async function create(movie) {
  return await Movie.create(movie);
}

async function addCast(movieId, castId) {
  await Movie.findByIdAndUpdate({_id: movieId}, {$push: {castList: castId}}, {new: true});
  await Cast.findByIdAndUpdate({_id: castId}, {$push: {movieList: movieId}}, {new: true});

  //*version 2
  /**
   * 1. Вземаме филма по id
   *  const movie = await Movie.findById(movieId);
   * 
   * 2. Добавяме към масива castList добавеното id на cast
   *  movie.castList.push(castId)
   * 
   * 3. Запазваме промените в БД и връщаме резултата
   *  return movie.save()
   * 
   * 
   */


}



//стойство за изтриване без да изтриваме данните в БД
async function deleteById(id) {
  return await Movie.findByIdAndDelete(id);
  //await Movie.findByIdAndUpdate(id, {isDelete: true})
}

async function updateById(id, movie) {
  const existing = await Movie.findById(id)
  //const existing = await Movie.findById(id, {isDelete: true})
  existing.title = movie.title;
  existing.genre = movie.genre;
  existing.director = movie.director;
  existing.year = Number(movie.year);
  existing.imageURL = movie.imageURL || undefined;
  existing.rating = movie.rating;
  existing.description = movie.description;


  await existing.save()

}




module.exports = {
  getAll,
  getById,
  create,
  addCast, 
  deleteById
};
