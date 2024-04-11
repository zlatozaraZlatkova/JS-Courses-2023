const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gim;

const volcanoSchema = new Schema({
  name: { type: String, required: true, minLength: [2, "Name should be at least 2 characters long"] },
  location: { type: String, required: true, minLength: [3, "Location should be at least 3 characters long"] },
  elevation: { type: Number, required: true, min: [0, "Elevation should be positive number"] },
  lastEruption: { type: Number, required: true, min: 0, max: 2024 },
  imageURL: {
    type: String,
    required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    }
  },
  typeVolcano: {
    type: String, required: true, enum: { values: ["Supervolcanoes", "Submarine", "Subglacial", "Mud", "Stratovolcanoes", "Shield"], message: "Invalid type of volcano" }
  },
  description: {
    type: String, required: true,
    minLength: [10, "Description should be at least 10 characters long"]
  },
  voteList: { type: [Types.ObjectId], required: true, ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },



})

const Volcano = model("Volcano", volcanoSchema);

module.exports = Volcano;