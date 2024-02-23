const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const hotelSchema = new Schema({
  name: { type: String, required: true, minLength: [4, "Hotel name must be at least 4 characters long"] },
  city: { type: String, required: true, minLength: [3, "City must be at least 3 characters long"] },
  imgUrl: {
    type: String, required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    }

  },
  rooms: { type: Number, required: true, min: [1, "Rooms must be between 1 and 100"], max: [100, "Rooms must be between 1 and 100"] },
  
  bookings: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },

});

hotelSchema.index({ name: 1 }, { 
  unique: true,
  collation: {
    locale: "en",
    strength: 2
  }

})

const Hotel = model("Hotel", hotelSchema);

module.exports = Hotel;

//ВАЖНО!
//масив от ид-тата на резервираните стаи от потребителите bookings: { type: [Types.ObjectId], ref: "User", default: [] },