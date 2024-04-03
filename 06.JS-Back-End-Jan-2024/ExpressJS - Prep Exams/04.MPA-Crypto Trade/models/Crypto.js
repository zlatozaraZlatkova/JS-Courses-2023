const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const cryptoSchema = new Schema({
  name: {
    type: String, required: true,
    minLength: [2, "Name should be at least 2 characters long"]
  },
  imageURL: {
    type: String, required: true,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    }
  },
  price: {
    type: Number, required: true,
    min: [0, "Price should be positive number"]
  },
  description: {
    type: String, required: true,
    minLength: [10, "Description should be at least 10 characters long"]
  },
  paymentMethod: {
    type: String, required: true, enum: {
      values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
      message: 'Invalid payment method'
    }
  },
  buyersList: { type: [Types.ObjectId], required: true, ref: "User", default: [] },
  owner: { type: Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true, default: Date.now }


})


const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto;