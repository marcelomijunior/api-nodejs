const mongoose = require("mongoose");

const STRING_CONNECTION =
  "mongodb+srv://marcelomijunior:L0Q4tkOa1dtjaamd@cluster0.whosl2l.mongodb.net/todo_database?retryWrites=true&w=majority";

module.exports = {
  init: () => {
    mongoose.connect(STRING_CONNECTION).then((res) => {
        console.log(`connection succesful: ${res}`);
    }).catch((err) => {
        console.log(`connection failed! ${err}`);
    });
  },
};
