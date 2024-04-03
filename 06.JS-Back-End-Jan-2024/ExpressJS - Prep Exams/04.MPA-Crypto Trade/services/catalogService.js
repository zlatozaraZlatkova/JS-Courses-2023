const User = require("../models/User");
const Crypto = require("../models/Crypto");

async function getAll() {
  return await Crypto.find({}).lean();
}


async function getById(id) {
  return await Crypto.findById(id).lean();
}

async function createItem(userId, data) {
  const newCrypto = await Crypto.create(data);
  await User.findByIdAndUpdate(userId, { $push: { createdCrypto: newCrypto._id } }, { new: true });

  return newCrypto;

}

async function updateById(id, data) {
  const existing = await Crypto.findById(id);

  existing.name = data.name;
  existing.imageURL = data.imageURL;
  existing.price = data.price;
  existing.description = data.description;
  existing.paymentMethod = data.paymentMethod;

  return existing.save();
};

async function deleteById(coinId, userId) {
  await User.findByIdAndUpdate(userId, { $pull: { createdCrypto: coinId } }, { new: true });

  await Crypto.findByIdAndDelete(coinId);
};

//Buy item
async function buyItem(coinId, userId) {
  await User.findByIdAndUpdate(userId, { $push: { boughtCrypto: coinId } }, { new: true });
  await Crypto.findByIdAndUpdate(coinId, { $push: { buyersList: userId } }, { new: true });

}


//Search query
async function getSearchItem(search, paymentMethod) {
  const query = {};
  
  if(search) {
    query.name = new RegExp(search, "i");

  }

  if(paymentMethod) {
    query.paymentMethod = paymentMethod
  }
  
  return await Crypto.find(query).lean()
}


module.exports = {
  getAll,
  getById,
  createItem,
  updateById,
  deleteById,
  buyItem, 
  getSearchItem
}