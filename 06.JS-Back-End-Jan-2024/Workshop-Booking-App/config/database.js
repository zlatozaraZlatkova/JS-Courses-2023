const mongoose = require("mongoose");

const connStr =
  process.env.DATABASE_CONNECTION_STRING ||
  "mongodb://localhost:27017/booking-app";

module.exports = async (app) => {
  try {
    await mongoose.connect(connStr);
    console.log("Booking-App-DB connected...");
  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }
};
