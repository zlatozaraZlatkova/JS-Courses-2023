const Chalet = require("../models/Chalet");

async function getAll(search, city, fromPrice, toPrice) {
  return await Chalet.find({}).lean();

}

async function getById(id) {
  return await Chalet.findById(id).lean();
}

async function create(roomData) {

  const room = {
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

  const result = await Chalet.create(room);

  return result;
}



module.exports = {
  getAll,
  getById,
  create,
 
};
