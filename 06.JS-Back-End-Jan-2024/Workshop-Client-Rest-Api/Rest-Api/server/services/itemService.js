const Item = require("../models/Item");

async function getAll() {
  return Item.find({})
}

async function getByUserId(userId) {
  return Item.find({ _ownerId: userId });
}

async function getById(id) {
  return Item.findById(id);
}
async function createItem(item) {
  return Item.create(item)

}
async function updateItem(id, item) {
  
  const existing = await Item.findById(id);
  
  existing.make = item.make;
  existing.model = item.model;
  existing.year = item.year;
  existing.description = item.description;
  existing.price = item.price;
  existing.img = item.img;
  existing.material = item.material;
  
  return existing.save();

}

async function deleteItem(id) {
  return Item.findOneAndDelete(id);
}


module.exports = {
  getAll,
  getByUserId,
  getById,
  createItem,
  updateItem,
  deleteItem

}