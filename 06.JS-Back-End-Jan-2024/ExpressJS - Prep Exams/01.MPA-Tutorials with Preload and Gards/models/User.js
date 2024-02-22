const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String, required: true, minLength: [5, "Username must be at least 5 characters long"], 
    match:[ /^[a-zA-Z0-9\s]+$/gi, "Username may contain only english letters and numbers"],
  },
  hashedPassword: { type: String, required: true },

});


userSchema.index(
  { username: 1},
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