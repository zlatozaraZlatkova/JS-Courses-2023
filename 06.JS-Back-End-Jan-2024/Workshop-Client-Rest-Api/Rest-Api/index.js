const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const connectionString = "mongodb://localhost:27017/furniture-db";

const cors = require("./server/middlewares/cors");
const authController = require("./server/controllers/authController");
const dataController = require("./server/controllers/dataController");

const trimBody = require("./server/middlewares/trimBody");
const session = require("./server/middlewares/session");


start();

async function start() {
  try {
    await mongoose.connect(connectionString, { family: 4 });
    console.log('Database connected');

  } catch (err) {
    console.log(`Error initializing DB: ${err.message}`);
    process.exit(1);
  }

  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(trimBody());

  
  app.use(session());

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });

  

  app.use('/users', authController);
  app.use('/data', dataController);

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
}


