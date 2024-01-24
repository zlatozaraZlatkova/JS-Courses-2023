const express = require("express");
const PORT = 5000;

const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });

const catalogController = require("./controllers/catalogController");
const searchController = require("./controllers/searchController");
const createController = require("./controllers/createController");
const defaultTitle = require("./middlewares/defaultTitle");
const defaultController = require("./controllers/defaultController");

//start app
const app = express();

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

/**req.body*/
app.use(express.urlencoded({ extended: false }));

/**static */
app.use("/static", express.static("static"));

app.use(defaultTitle("Movie Magic"));

app.use("/", createController);
app.use("/search", searchController);
app.use("/", catalogController);
app.use("/details", catalogController);

//Default page - 404 Not Found
app.all("*", defaultController);

app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
