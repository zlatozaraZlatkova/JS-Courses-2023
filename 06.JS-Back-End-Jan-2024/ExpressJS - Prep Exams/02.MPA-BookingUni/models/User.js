const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi, "Email is invalid"]
  },

  username: {
    type: String,
    required: true,
    match:[ /^[a-zA-Z0-9\s]+$/gi, "Username may contain only english letters and numbers"],
  },
  hashedPassword: { type: String, required: true },

  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin"],
      },
    ],
    default: ["user"],
  },
});

//Mongoose Unique index on multiple field
//The 1 indicates the sort order of the index: 1 = ascending, -1 = descending
userSchema.index(
  { email: 1, username: 1},
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
