const express = require("express");
const app = express();

const db = require("./database");

const indexRoute = require("./routes/index");
const todoRoute = require("./routes/todoRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", indexRoute);
app.use("/todo", todoRoute);

module.exports = app;
