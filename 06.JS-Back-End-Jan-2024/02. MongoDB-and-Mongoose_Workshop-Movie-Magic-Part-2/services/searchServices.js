const Movie = require("../models/Movie");

async function getAllSearches(title, genre, year) {
  let query = {};
 

  if (title) {
    query.title = new RegExp(title, "i");
  }

  if (genre) {
    query.genre = new RegExp(genre, "i");
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query).lean();
}

module.exports = {
  getAllSearches,
};
