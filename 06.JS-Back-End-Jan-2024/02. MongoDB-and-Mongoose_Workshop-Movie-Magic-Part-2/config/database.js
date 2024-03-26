const mongoose = require("mongoose");


const connStr = "mongodb://localhost:27017/magic-movie-app";

module.exports = async (app) => {
  try {
    await mongoose.connect(connStr, { family: 4 });
    console.log("Magic-Movie-App-DB connected...");
    
  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }
};