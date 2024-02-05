const Chalet = require("../models/Chalet");

async function getAll(search, city, fromPrice, toPrice) {
  return await Chalet.find({}).lean();

}

async function getById(id) {
  return await Chalet.findById(id).populate("activities", "label iconUrl").lean();
}

async function create(roomData, ownerId, name) {

  const room = {
    name: roomData.name,
    city: roomData.city,
    beds: Number(roomData.beds),
    price: Number(roomData.price),
    description: roomData.description,
    imgUrl: roomData.imgUrl,
    owner: ownerId,
    ownerName: name
  };

  missingValues(room);

  const result = await Chalet.create(room);

  return result;
}

async function update(roomId, roomData) {
  
  missingValues(roomData);

  const room = await Chalet.findById(roomId);

  room.name = roomData.name;
  room.city = roomData.city;
  room.beds = Number(roomData.beds);
  room.price = Number(roomData.price);
  room.description = roomData.description
  room.imgUrl = roomData.imgUrl;

  await room.save();
  
  return room;


}

function missingValues(room) {
  const missing = Object.entries(room).filter(([key, value]) => !value);
  if (missing.length > 0) {
    throw new Error(
      missing.map((missing) => `${missing[0]} field is required!`)
        .join("\n")
    );
  }
}



async function deleteById(id) {
  return Chalet.findByIdAndDelete(id);
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};
