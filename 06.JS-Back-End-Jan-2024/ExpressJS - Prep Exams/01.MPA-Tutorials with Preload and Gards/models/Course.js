const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gim;

const courseSchema = new Schema({
  title: {
    type: String, required: true,
    minLength: [4, "Course title must be at least 4 characters long"],
  },
  description: {
    type: String, required: true,
    minLength: [20, "Course description should be at least 20 characters long"],
    maxLength: [50, "Course description shouldn't contain more than 50 characters"],
  },
  imageUrl: {
    type: String, required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    },
  },
  duration: { type: String, required: [true, "Course duration is required"] },


  createdAt: {
    type: String, required: true,
    default: () => (new Date()).toISOString().slice(0, 10)

  },

  users: { type: [Types.ObjectId], ref: "User", default: [] },
  userCount: { type: Number, ref: 'User', default: 0 },
  owner: { type: Types.ObjectId, required: true, ref: "User" },

});

courseSchema.index(
  { title: 1 },
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

