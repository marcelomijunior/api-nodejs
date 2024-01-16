const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxLength: 256,
  },
  description: {
    type: String,
    require: true,
  },
  finished: {
    type: Boolean,
    require: false,
  },
  date: {
    type: Date,
    require: false,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
