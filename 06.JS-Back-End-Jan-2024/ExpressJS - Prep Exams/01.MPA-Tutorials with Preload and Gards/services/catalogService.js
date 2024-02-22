const Course = require("../models/Course");

async function getAll(search) {
  return await Course.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function getAllByDate(search) {
  const query = {};

  if (search) {
    query.title = new RegExp(search, "i");
    return await Course.find(query).sort({ createdAt: 1 }).lean();
  } else {
    return await Course.find({}).sort({ createdAt: 1 }).lean();
  }
}

async function getById(id) {
  return await Course.findById(id).lean();
}

async function getByIdRaw(id) {
  return Course.findById(id);
}

async function createCourse(course) {
  return await Course.create(course);
}

async function updateById(course, courseData) {
  course.title = courseData.title;
  course.description = courseData.description;
  course.imageUrl = courseData.imageUrl;
  course.duration = courseData.duration;

  await course.save();
}

async function deleteById(id) {
  return await Course.findByIdAndDelete(id);
}

async function enrollUser(course, userId) {
  course.users.push(userId);
  course.userCount++;

  return course.save();
}

module.exports = {
  getAll,
  getAllByDate,
  getById,
  createCourse,
  updateById,
  deleteById,
  enrollUser,
  getByIdRaw,
};
