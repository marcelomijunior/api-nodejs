const express = require("express");
const app = express();

const db = require("./mongoose.config");

const indexRoute = require("./routes/index");
const todoRoute = require("./routes/todoRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", indexRoute);
app.use("/", todoRoute);

module.exports = app;
