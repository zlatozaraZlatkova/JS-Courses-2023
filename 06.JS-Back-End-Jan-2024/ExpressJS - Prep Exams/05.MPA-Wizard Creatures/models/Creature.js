const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const creatureSchema = new Schema({
  name: {
    type: String, required: true,
    minLength: [2, "Name should be at least 2 characters long"]
  },
  species: {
    type: String, required: true,
    minLength: [3, "Species should be at least 3 characters long"]
    
  },
  skinColor: {
    type: String, required: true,
    minLength: [3, "Skin color should be at least 3 characters long"]
    
  },
  eyeColor: {
    type: String, required: true,
    minLength: [3, "Eye color should be at least 3 characters long"]
    
    
  },
  imageURL: {
    type: String, required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    }
  },
  description: {
    type: String, required: true,
    minLength: [5, "Description should be at least 5 characters long"], 
    maxLength: [500, "Description should not be longer than 500 characters "]
    
  },
  usersVotesList: { type: [Types.ObjectId], required: true, ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true, default: Date.now }


})


const Creature = model("Creature", creatureSchema);

module.exports = Creature;