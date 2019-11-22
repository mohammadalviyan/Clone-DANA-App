"use-strict";

require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./src/routes/index");

// Databases
const db = require("./src/database/database");

//Text DB
db.authenticate()
  .then(() => {
    console.log("Database Connected.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(cors());

const portServer = 5000;
const port = process.env.PORT || portServer;
const nodeEnv = "Development";

app.listen(port, () => {
  console.log(`Server is running in port ${port} in ${nodeEnv} Node`);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", Router);

module.exports = app;
