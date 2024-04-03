const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  createdCrypto: { type: [Types.ObjectId], required: true, ref: "Crypto", default: [] },
  boughtCrypto: { type: [Types.ObjectId], required: true, ref: "Crypto", default: [] },
  createdAt: { type: Date, required: true, default: Date.now },
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
