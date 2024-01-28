const express = require("express");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");
const databaseConfig = require("./config/database");
const PORT = 3000;

start();

async function start() {
  const app = express();
  
  await databaseConfig(app);

  expressConfig(app);
  routesConfig(app);
  

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
}





