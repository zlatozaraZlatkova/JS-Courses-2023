const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  createdVolcano: { type: [Types.ObjectId], required: true, ref: "Volcano", default: [] },
  voteVolcano: { type: [Types.ObjectId], required: true, ref: "Volcano", default: [] },
 
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
