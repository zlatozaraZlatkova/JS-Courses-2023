const Activity = require("../models/Activity");
const Chalet = require("../models/Chalet");

async function getAllActivities() {
  return Activity.find({}).lean();

}

async function createActivity(label, iconUrl) {
  return Activity.create({
    label,
    iconUrl
  })
}


async function addActivities(roomId, activityIds) {
  const room = await Chalet.findById(roomId).populate('activities');
  const activities = await Activity.find({ _id: { $in: activityIds } });

  // Remove room ref from removed facilities
  const toRemove = room.activities.filter(f => activities.every(x => x._id.toString() != f._id.toString()));
  console.log('To remove', toRemove.map(x => x.label));

  toRemove.forEach(a => {
    // Remove Room from Facility
    a.rooms.splice(a.rooms.findIndex(rId => rId.toString() == roomId), 1);
    // Remove Facility from Room
    room.activities.splice(room.activities.findIndex(x => x._id.toString() == a._id.toString()), 1);
  });

  // Determine new facilities
  const newlyAdded = activities.filter(a => room.activities.every(x => x._id.toString() != a._id.toString()));
  console.log('New', newlyAdded.map(x => x.label));

  // Add room ref to newly added facilities
  newlyAdded.forEach(a => {
    room.activities.push(a);
    a.rooms.push(room);
  });

  await room.save();
  await Promise.all(toRemove.map(a => a.save()));
  await Promise.all(newlyAdded.map(a => a.save()));
}


module.exports = {
  getAllActivities,
  createActivity,
  addActivities
}