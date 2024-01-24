const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/data.json"))
);

function getAllSearches(search, genre, year) {
  if (search) {
    return data.filter(
      (movie) => movie.title.toLowerCase() === search.toLowerCase()
    );
  }
  if (genre && year) {
    if (year) {
      return data.filter(
        (movie) =>
          movie.year === Number(year) &&
          movie.genre.toLowerCase() === genre.toLowerCase()
      );
    }
  }

  if (genre) {
    return data.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (year) {
    return data.filter((movie) => movie.year === Number(year));
  }

  return data;
}

module.exports = {
  getAllSearches,
};
