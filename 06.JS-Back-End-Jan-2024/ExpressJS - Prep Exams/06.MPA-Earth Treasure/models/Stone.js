const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gim;

const stoneSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name should be at least 2 characters long"],
  },
  category: {
    type: String,
    required: true,
    minLength: [3, "Category should be at least 3 characters long"],
  },
  color: {
    type: String,
    required: true,
    minLength: [2, "Color should be at least 2 characters long"],
  },
  image: {
    type: String,
    required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    },
  },
  location: {
    type: String,
    required: true,
    minLength: [5, "Location should be at least 3 characters long"],
    maxLength: [15, "Location shouldn't contain more than 30 characters"],
  },
  formula: {
    type: String,
    required: true,
    minLength: [3, "Formula should be at least 3 characters long"],
    maxLength: [30, "Formula shouldn't contain more than 30 characters"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description should be at least 10 characters long"],
  },
  likedList: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true, default: Date.now }
});

stoneSchema.index({ name: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }

)

const Stone = model("Stone", stoneSchema);
module.exports = Stone;