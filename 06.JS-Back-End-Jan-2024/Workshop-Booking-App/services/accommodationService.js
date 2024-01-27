const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../models/data.json")));

function getAll(search, city, fromPrice, toPrice) {
  search = search.toLowerCase();
  
  return data
  .filter(r => r.name.toLowerCase().includes(search) || r.description.toLowerCase().includes(search))
  .filter(r => r.city.toLowerCase().includes(city.toLowerCase()))
  .filter(r => r.price >= fromPrice && r.price <= toPrice)


}

function getById(id) {
  return data.find((item) => item.id == id);
}

async function create(roomData) {
  const id = getId();
  const room = {
    id: id,
    name: roomData.name,
    city: roomData.city,
    beds: Number(roomData.beds),
    price: Number(roomData.price),
    description: roomData.description,
    imgUrl: roomData.imgUrl,
  };

  const missingValues = Object.entries(room).filter(([key, value]) => !value);
  if (missingValues.length > 0) {
    throw new Error(
      missingValues
        .map((missing) => `${missing[0]} field is required!`)
        .join("\n")
    );
  }

  data.push(room);
  await persist();
  return room;
}

function getId() {
  return ("000000" + ((Math.random() * 99999) | 0).toString(16)).slice(-6);
}

async function deleteById(id) {
  const matchIndex = data.findIndex((r) => r.id == id);
  console.log(matchIndex);

  data.splice(matchIndex, 1);
  await persist();
}

async function persist() {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(__dirname, "data.json"),
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
  deleteById,
};
