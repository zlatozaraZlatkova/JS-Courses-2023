const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi, "Invalid email"]
  },
  hashedPassword: { type: String, required: true },

  createdMovies: { type: [Types.ObjectId], required: true, ref: "Movie", default: [] },
  createdCasts: { type: [Types.ObjectId], required: true, ref: "Cast", default: [] }

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


