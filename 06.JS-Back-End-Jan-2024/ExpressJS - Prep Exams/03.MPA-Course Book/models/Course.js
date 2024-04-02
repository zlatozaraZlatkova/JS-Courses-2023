const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const courseSchema = new Schema({
  title: {
    type: String, required: true,
    minLength: [5, "Title should be at least 5 characters long"]
  },
  type: {
    type: String, required: true,
    minLength: [3, "Type should be at least 3 characters long"]
  },
  certificate: {
    type: String, required: true, minLength:
      [2, "Certificate should be at least 2 characters long"]
  },
  image: {
    type: String, required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    }
  },
  description: {
    type: String, required: true,
    minLength: [10, "Description should be at least 10 characters long"]
  },
  price: {
    type: Number, required: true,
    min: [0, "Price should be positive number"]
  },

  singUpList: { type: [Types.ObjectId], required: true, ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },

  createdAt: { type: Date, required: true, default: Date.now }


})



courseSchema.index({ title: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }

);

const Course = model("Course", courseSchema);

module.exports = Course;