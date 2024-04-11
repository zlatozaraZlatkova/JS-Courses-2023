const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/beauty-of-volcanoes-db";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNECTION_STRING, { family: 4 });
    console.log("Beauty of volcanoes DB connected...");
  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }
};
