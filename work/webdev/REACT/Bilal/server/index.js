const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const db = require("./database");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// console.log(db.getUsers);
app.get("/data", db.getData);
app.get("/add", db.addData);
app.get("/del", db.delData);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
