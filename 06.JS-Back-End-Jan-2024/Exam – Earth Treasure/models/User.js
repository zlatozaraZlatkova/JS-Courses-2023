const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: [10, "Email should be at least 10 characters long"],
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi, "Invalid email"]
  },
  hashedPassword: { type: String, required: true },

  createdStones: { type: [Types.ObjectId], required: true, ref: "Stone", default: []},
  likes: {type: [Types.ObjectId], required: true, ref: "Stone", default: []}

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