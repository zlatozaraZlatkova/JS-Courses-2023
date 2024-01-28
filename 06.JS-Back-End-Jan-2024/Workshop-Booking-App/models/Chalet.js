const { Schema, model } = require("mongoose");

const chaletSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, minLength: 5, maxLength: 1000 },
  city: { type: String, required: true },
  beds: { type: Number, required: true, min: 1, max: 20 },
  price: { type: Number, required: true, min: 1, max: 1000 },
  imgUrl: { type: String, required: true },
});

const Chalet = model("Chalet", chaletSchema);

module.exports = Chalet;
