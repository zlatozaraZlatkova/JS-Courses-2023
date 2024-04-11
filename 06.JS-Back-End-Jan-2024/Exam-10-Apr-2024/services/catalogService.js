const User = require("../models/User");
const Volcano = require("../models/Volcano");

async function getAll() {
  return Volcano.find({}).lean();
}

async function getById(id) {
  return Volcano.findById(id).lean();
}

async function createItem(userId, data) {
  const newVolcano = await Volcano.create(data);
  await User.findByIdAndUpdate(
    userId,
    { $push: { createdVolcano: newVolcano._id } },
    { new: true }
  );

  return newVolcano;
}

async function updateById(id, data) {
  const existing = await Volcano.findById(id);

  existing.name = data.name;
  existing.location = data.location;
  existing.elevation = Number(data.elevation);
  existing.lastEruption = Number(data.lastEruption);
  existing.imageURL = data.imageURL;
  existing.typeVolcano = data.typeVolcano;
  existing.description = data.description;

  return existing.save();
}

async function deleteById(volcanoId, userId) {
  await User.findByIdAndUpdate(
    userId,
    { $pull: { createdVolcano: volcanoId } },
    { new: true }
  );
  await Volcano.findByIdAndDelete(volcanoId);
}

async function voteItem(volcanoId, userId) {
  await User.findByIdAndUpdate(
    userId,
    { $push: { voteVolcano: volcanoId } },
    { new: true }
  );
  await Volcano.findByIdAndUpdate(
    volcanoId,
    { $push: { voteList: userId } },
    { new: true }
  );
}

async function getSearchItem(search, typeVolcano) {
  const query = {};

  if (search) {
    query.name = new RegExp(search, "i");
  }

  if (typeVolcano) {
    query.typeVolcano = typeVolcano;
  }

  return Volcano.find(query).lean();
}

module.exports = {
  getAll,
  getById,
  createItem,
  updateById,
  deleteById,
  voteItem,
  getSearchItem,
};
