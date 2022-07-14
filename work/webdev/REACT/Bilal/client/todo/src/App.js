import React, { Fragment } from "react";
import "./App.css";

import { InputTodo } from "./components/inputTodo";
import { ListTodo } from "./components/listTodo";
import { EditTodo } from "./components/editTodo";

function App() {
  return (
    <Fragment>
      <InputTodo />
    </Fragment>
  );
}

export default App;
