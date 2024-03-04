const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_REGEX = /^((https|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/gim;

const itemSchema = new Schema({
  make: { type: String, required: true, minlength: [3, 'Make must be at least 3 characters long'] },
  model: { type: String, required: true, minlength: [3, 'Model must be at least 3 characters long'] },
  year: {
    type: Number, required: true, validate: {
      validator: value => value >= 1950 && value <= 2050,
      message: 'Year must be between 1950 and 2050'
    }
  },
  description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
  price: { type: Number, required: true, min: [0.01, 'Price must be a positive number'] },
  img: {
    type: String,
    validator: (value) => URL_REGEX.text(value),
    message: (props) => {
      console.log(props);
      return `${props.value} is not a valid image URL`;
    },
    required: [true, 'Image URL is required']
  },
  material: { type: String, default: '' },
  //!Client -> Views -> Details -> ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));
  _ownerId: { type: ObjectId, ref: 'User', required: true }
  
});

const Item = model('Item', itemSchema);

module.exports = Item;

