const Stone = require("../models/Stone");
const User = require("../models/User");

async function getAll(search) {
  const query = {};
  if(search) {
    query.name = new RegExp(search, "i");
    return await Stone.find(query).lean();
    
  } else {
    return await Stone.find({}).lean();
  }
 
}

async function getLastThree() {
  return await Stone.find({}).sort({createdAt: -1}).limit(3).lean();
}

async function getById(id) {
  return await Stone.findById(id).lean();
}

async function createStone(userId, stone) {
 const itemCreate = await Stone.create(stone);
 await User.findByIdAndUpdate(userId, {$push: {createdStones: itemCreate._id}}, {new: true});
  
  return itemCreate;
}

async function updateById(id, stone) {
  const existing = await Stone.findById(id);
  existing.name = stone.name;
  existing.category = stone.category;
  existing.color = stone.color;
  existing.image = stone.image;
  existing.location = stone.location;
  existing.formula = stone.formula;
  existing.description = stone.description;

  await existing.save();
}

async function deleteById(id) {
  return await Stone.findByIdAndDelete(id);
}

async function getByIdDetailed(id) {
  return Stone.findById(id).populate("owner").populate("likes");
}


async function likesUser(stoneId, userId) {
  await Stone.findByIdAndUpdate({_id: stoneId}, {$push: {likedList: userId}}, {new: true});
  await User.findByIdAndUpdate({_id: userId}, {$push: {likes: stoneId}}, {new: true});

}


module.exports = {
  getAll, 
  getLastThree, 
  getById,
  getByIdDetailed, 
  createStone,
  updateById, 
  deleteById, 
  likesUser,
  
}