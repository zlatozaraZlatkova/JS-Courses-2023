const Course = require("../models/Course");
const User = require("../models/User");

async function getLastThree() {
  return await Course.find({}).sort({ createdAt: -1 }).limit(3).lean();

}

async function getAll() {
  return await Course.find({}).lean();
}

async function getById(id) {
  return Course.findById(id).lean();
  
}


async function getByIdDetailed(id) {
  return Course.findById(id).populate("owner").populate("singUpList").lean();
  
}


async function createItem(userId, course) {
  const createdCourse = await Course.create(course);
  await User.findByIdAndUpdate(userId, {$push: {createdCourses: createdCourse._id}}, {new: true});

  return createdCourse;
}

async function updateById(id, course) {
  const existing = await Course.findById(id);

  existing.title = course.title;
  existing.type = course.type;
  existing.certificate = course.certificate;
  existing.image = course.image;
  existing.description = course.description;
  existing.price = Number(course.price);

  await existing.save();
  
}

async function deleteById(id) {
  return await Course.findByIdAndDelete(id);
}


async function enrollUser(courseId, userId) {
  await Course.findByIdAndUpdate({_id: courseId}, {$push: {singUpList: userId}}, {new: true});
  await User.findByIdAndUpdate(userId, {$push: {signedUpCourses: courseId}}, {new: true});

  // const existing = await Course.findById(itemId);
  // existing.buyingList.push(userId);
  // return existing.save();

 
}




module.exports = {
  getAll,
  getById,
  createItem,
  updateById,
  deleteById, 
  getLastThree,
  enrollUser,
  getByIdDetailed
}

