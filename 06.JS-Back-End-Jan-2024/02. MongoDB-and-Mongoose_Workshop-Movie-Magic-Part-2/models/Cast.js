const { Schema, model, Types } = require("mongoose");

const URL_REGEX =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gim;

const castSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  born: { type: String, required: true },
  nameInMovie: { type: String, required: true },
  imageURL: {
    type: String,
    required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props} is not a valid image URL`;
    },
  },
 
  movieList: { type: [Types.ObjectId], ref: "Movie", default: [] },
});

castSchema.index(
  { name: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Cast = model("Cast", castSchema);

module.exports = Cast;