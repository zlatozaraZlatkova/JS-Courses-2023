const { Schema, model, Types } = require("mongoose");


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: [10, "Email should be at least 10 characters long"],
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi, "Invalid email"]
  },
  username: {
    type: String, required: true,
    minLength: [2, "Username should be at least 2 characters long"],
    match: [/^[a-zA-Z0-9\s]*$/gmi, "Username may contain only english letters and numbers"],
  },
  hashedPassword: { type: String, required: true },
  createdCourses: {type: [Types.ObjectId], required: true, ref: "Course", default: [] },
  signedUpCourses: {type: [Types.ObjectId], required: true, ref: "Course", default: [] }

})


userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);


const User = model("User", userSchema);

module.exports = User;