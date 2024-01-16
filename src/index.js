const app = require("./app");
const db = require("./database");

db.init();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
