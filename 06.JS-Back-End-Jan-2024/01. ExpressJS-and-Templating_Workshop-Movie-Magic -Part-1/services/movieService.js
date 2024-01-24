const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/data.json"))
);

function getAll() {
  return data;
}

function getById(id) {
  return data.find((movie) => movie.id == id);
}

async function create(movieData) {
  const movie = {
    id: genId(),
    title: movieData.title,
    genre: movieData.genre,
    director: movieData.director,
    year: Number(movieData.year),
    imageURL: movieData.image,
    rating: Number(movieData.rating),
    description: movieData.description,
  };

  //validation
  const missing = Object.entries(movie).filter(([k, v]) => !v);
  if (missing.length > 0) {
    // throw new Error(missing.map(m => `${m[0]} is required!`));
    throw new Error(`All fields are required!`);
  }

  data.push(movie);

  await persist();

  return movie;
}

function genId() {
  //return ("000000" + (Math.random()* 99999 | 0).toString(16)).slice(-6);
  return "asdf" + ("0000" + ((Math.random() * 99999) | 0)).slice(-4);
}

async function persist() {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(__dirname, "../models/data.json"),
      JSON.stringify(data, null, 2),
      (err) => {
        if (err == null) {
          resolve();
        } else {
          reject(err);
        }
      }
    );
  });
}

module.exports = {
  getAll,
  getById,
  create,
};
