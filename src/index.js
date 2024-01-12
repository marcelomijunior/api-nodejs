const app = require("./app");
const db = require("./mongoose.config");

db.init();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
