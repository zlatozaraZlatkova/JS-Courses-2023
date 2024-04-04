const User = require("../models/User");
const Creature = require("../models/Creature");

async function getAll() {
  return Creature.find({}).lean();
}


async function getById(id) {
  return Creature.findById(id).populate("owner").populate("usersVotesList").lean();
}


async function getUserInfo(userId) {
  return Creature.find({ owner: userId }).populate("owner").lean();

}

async function createItem(userId, data) {
  const newItem = await Creature.create(data);
  await User.findByIdAndUpdate(userId, { $push: { createdCreature: newItem._id } }, { new: true });

  return newItem;

}

async function updateById(id, data) {
  const existing = await Creature.findById(id);

  existing.name = data.name;
  existing.species = data.species;
  existing.skinColor = data.skinColor;
  existing.eyeColor = data.eyeColor;
  existing.imageURL = data.imageURL;
  existing.description = data.description;


  return existing.save();
};

async function deleteById(creatureId, userId) {
  await User.findByIdAndUpdate(userId, { $pull: { createdCreature: creatureId } }, { new: true });

  await Creature.findByIdAndDelete(creatureId);
};

//Vote item
async function voteItem(creatureId, userId) {
  await User.findByIdAndUpdate(userId, { $push: { votes: creatureId } }, { new: true });
  await Creature.findByIdAndUpdate(creatureId, { $push: { usersVotesList: userId } }, { new: true });

}




module.exports = {
  getAll,
  getById,
  createItem,
  updateById,
  deleteById,
  voteItem,
  getUserInfo

}