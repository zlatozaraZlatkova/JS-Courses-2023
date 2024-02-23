const Hotel = require("../models/Hotel");

async function getAll() {
  return await Hotel.find({}).lean();
}

async function getById(id) {
  return await Hotel.findById(id).lean();
}

async function create(hotel) {
  return await Hotel.create(hotel);
}

async function editById(id, hotel) {
  const existing = await Hotel.findById(id);

  existing.name = hotel.name;
  existing.city = hotel.city;
  existing.imgUrl = hotel.imgUrl;
  existing.rooms = hotel.rooms;

  await existing.save();
}

async function deleteById(id) {
  return await Hotel.findByIdAndDelete(id);
}

async function bookRoom(hotelId, userId) {
  const hotel = await Hotel.findById(hotelId);

  if (hotel.bookings.includes(userId)) {
    throw new Error("Can't book the same hotel room twice");
  } else {
    hotel.bookings.push(userId);
    await hotel.save();
    await Hotel.findOneAndUpdate(
      { _id: hotelId },
      { $inc: { rooms: -1 } },
      { new: true }
    );
  }
}

async function getByUserBooking(userId) {
  return Hotel.find({ bookings: userId }).lean();
}

module.exports = {
  getAll,
  getById,
  create,
  editById,
  deleteById,
  bookRoom,
  getByUserBooking,
};
