const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true, min: 1900, max: 2030},
  imageURL: { type: String, required: true, 
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return`${props.value} is not a valid image URL`
    }
  
  
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  description: { type: String, required: true },


  castList: { type: [Types.ObjectId], ref: "Cast", default: [] },
  //creatorId
  owner: { type: Types.ObjectId, ref: "User"},

});

movieSchema.index(
  { title: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;