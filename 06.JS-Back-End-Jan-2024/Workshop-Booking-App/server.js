const express = require("express");
const PORT = 3000;

const app = express();

const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));

const homeController = require("./controllers/homeController");
const catalogController = require("./controllers/catalogController");
const createController = require("./controllers/createController");
const defaultController = require("./controllers/defaultController");
const defaultTitle = require("./middlewares/defaultTitle");
const deleteController = require("./controllers/deleteController");

app.use(defaultTitle("Chalets & Huts"));

app.use("/", homeController);
app.use("/catalog", catalogController);
app.use("/create", createController);
app.use("/delete", deleteController);

app.use(defaultController);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
