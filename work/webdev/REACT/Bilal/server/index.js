const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const pool = require("./database");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Todo" });
});

// console.log(db.getUsers);
// app.get("/data", db.getData);
// app.get("/add", db.addData);
// app.get("/del", db.delData);

//posting todos
app.post("/todos", async (req, res) => {
  try {
    // console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1)",
      [description] //this replaces $1
    );
  } catch (error) {
    console.log(error);
  }
  console.log("Added data");
});

//getting all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("select * from td_list");
  } catch (error) {
    console.log(error);
  }
  console.log("getting data");
});

//getting specific todos
app.get("/todos/:id", async (req, res) => {
  // '/:id'  => req.params
  try {
    const { id } = req.params;

    const todo = await pool.query("select * from td_list where t_id = $1", [
      id,
    ]);
  } catch (error) {
    console.log(error);
  }
  console.log("getting id-data");
});

//update todos
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatetodo = await pool.query(
      "update td_list set description = $1 where t_id = $2",
      [description, id]
    );

    //
  } catch (error) {
    console.log(error);
  }
  console.log("update data");
});

//delete todos
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletetodo = await pool.query("delete from td_list where t_id=$1 ", [
      id,
    ]);

    //
  } catch (error) {
    console.log(error);
  }
  console.log("delete data");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
