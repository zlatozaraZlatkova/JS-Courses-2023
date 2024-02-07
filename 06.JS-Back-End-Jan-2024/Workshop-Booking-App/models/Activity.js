const { Schema, model, Types } = require("mongoose");

const URL_REGEX = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/igm;

const activitySchema = new Schema({
  label: { type: String, required: true },
  iconUrl: {
    type: String,
    minlength: [10, 'Icon URL must be at least 10 characters long'],
    validate: {
      validator: (value) => URL_REGEX.test(value),
      message: (props) => {
        console.log(props);
        return `${props.value} is not a valid image URL`;
      }
    }

  },
  rooms: { type: [Types.ObjectId], default: [], ref: "Chalet" }

});

activitySchema.index({ label: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);


const Activity = model("Activity", activitySchema);

module.exports = Activity;

