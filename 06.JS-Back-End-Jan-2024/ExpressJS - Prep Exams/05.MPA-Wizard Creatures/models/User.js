const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  firstName: { type: String, required: true,  minLength: [3, "First name should be at least 3 characters long"] },
  lastName: { type: String, required: true, minLength: [3, "Last name should be at least 3 characters long"] },
  email: { type: String, required: true, minLength: [10, "Email should be at least 10 characters long"] },
  hashedPassword: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },


  createdCreature: { type: [Types.ObjectId], required: true, ref: "Creature", default: [] },
  votes: { type: [Types.ObjectId], required: true, ref: "User", default: [] },
  

});

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