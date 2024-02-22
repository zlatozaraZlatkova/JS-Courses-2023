const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/tutorials-db";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNECTION_STRING, { family: 4});

    console.log("Tutorials DB connected...");

  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }
};

/**
 * If you become an error: [Error initializing DB: connect ECONNREFUSED ::1:27]
 * In node.js v18, localhost uses ipv6 address (::1), and by default mongodb localhost doesn't have ipv6 enabled. That's why you're facing this issue.
 * If you want to use ipv4 localhost address (127.0.0.1) use this:
 * 
 *  -- const CONNECTION_STRING = "mongodb://localhost:27017/examDb";
 *  -- await mongoose.connect(CONNECTION_STRING, { family: 4});
 * 
 * OR
 * 
 * -- const CONNECTION_STRING = "mongodb://127.0.0.1/scaffold-db"
 * -- await mongoose.connect(CONNECTION_STRING);
 * 
 */