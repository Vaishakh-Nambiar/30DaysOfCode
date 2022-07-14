// vai_todo
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import db from "./firebase";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setList] = useState(["task1", "task2"]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) =>
      console.log(
        snapshot.docs.map((d) => {
          return d.data().todo;
        })
      )
    );
  }, [todo]);

  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();

    if (todo !== ` `) {
      setList([...todoList, todo]);
    }
    setTodo(" ");
  };

  // const inputDelete = (e, key) => {
  //   e.preventDefault();
  //   console.log(key);
  //   todoList.filter((t, i) => {
  //     if (i !== key) return t;
  //   });
  //   console.log(todoList);
  // };

  return (
    <div className="App">
      <h1>TODO APP</h1>

      <Stack spacing={2}>
        {/* <input value={todo} onChange={inputChange} /> */}
        {/* <button type="submit" onClick={inputSubmit}>
          OK
        </button> */}
        <form>
          <Grid
            item
            xs={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              id="outlined-basic"
              label="Add Task"
              variant="outlined"
              value={todo}
              onChange={inputChange}
              sm={4}
            />

            <Button variant="outlined" type="submit" onClick={inputSubmit}>
              OK
            </Button>
          </Grid>
        </form>
        <div>
          <ul>
            <Stack spacing={2}>
              {todoList.map((t, i) => {
                return (
                  <li key={i} style={{ listStyle: "none", margin: 10 }}>
                    {t}

                    {/* <Button
                      variant="outlined"
                      type="submit"
                      onClick={(e) => inputDelete(e, i)}
                      style={{ marginInline: 50 }}
                    >
                      X
                    </Button> */}
                  </li>
                );
              })}
            </Stack>
          </ul>
        </div>
      </Stack>
    </div>
  );
}

export default App;
