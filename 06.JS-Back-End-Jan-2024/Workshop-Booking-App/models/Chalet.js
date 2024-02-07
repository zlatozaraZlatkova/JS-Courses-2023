const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const chaletSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, minLength: 5, maxLength: 1000 },
  city: { type: String, required: true },
  beds: { type: Number, required: true, min: 1, max: 20 },
  price: { type: Number, required: true, min: 1, max: 1000 },
  imgUrl: {
    type: String,
    minlength: [10, 'Image URL must be at least 10 characters long'],
    validate: {
      validator: (value) => URL_REGEX.test(value),
      message: (props) => {
        console.log(props);
        return `${props.value} is not a valid image URL`;
      }
    }
  },
  activities: { type: [Types.ObjectId], default: [], ref: "Activity" },
  owner: { type: Types.ObjectId, required: true, ref: "User" },
  ownerName: { type: String, required: true, ref: "User" },
});

chaletSchema.index({ name: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);


const Chalet = model("Chalet", chaletSchema);

module.exports = Chalet;
