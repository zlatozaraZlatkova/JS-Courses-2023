const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/wizard-db";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNECTION_STRING, { family: 4 });
    console.log("Wizard DB connected...");
  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }
};