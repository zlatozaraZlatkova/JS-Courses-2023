const { Schema, model, Types } = require("mongoose");

const activitySchema = new Schema({
  label: {type: String, required: true},
  iconUrl: {type: String},
  rooms: {type: [Types.ObjectId], default: [], ref: "Chalet" }

});

const Activity = model("Activity", activitySchema);

module.exports = Activity;

