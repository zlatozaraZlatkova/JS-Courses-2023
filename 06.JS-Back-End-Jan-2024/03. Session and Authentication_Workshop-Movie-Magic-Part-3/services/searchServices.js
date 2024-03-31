const Movie = require("../models/Movie");

// const fs = require("fs");
// const path = require("path");

// const data = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../models/data.json"))
// );

async function getAllSearches(title, genre, year) {
  let query = {}

   //full match
  
  if(title) {
    query.title = new RegExp(title, "i");
    
    //! ако добавим в модела lowercase: true, то тогава входните данни ще се запишат с малки букви.
    //! така няма да има нужда да се използва regex 
    //todo:  query = query.find({ search: search.toLowerCase() });
  }

  if (genre) {
    query.genre = new RegExp(genre, "i");
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query).lean();


  // if (search) {
  //   return data.filter(
  //     (movie) => movie.title.toLowerCase() === search.toLowerCase()
  //   );
  // }
  // if (genre && year) {
  //   if (year) {
  //     return data.filter(
  //       (movie) =>
  //         movie.year === Number(year) &&
  //         movie.genre.toLowerCase() === genre.toLowerCase()
  //     );
  //   }
  // }

  // if (genre) {
  //   return data.filter(
  //     (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
  //   );
  // }

  // if (year) {
  //   return data.filter((movie) => movie.year === Number(year));
  // }

  // return data;
}

module.exports = {
  getAllSearches,
};
