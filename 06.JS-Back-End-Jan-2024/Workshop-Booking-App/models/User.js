const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
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

const User = model("User", userSchema);

module.exports = User;
