// vai_todo
import React, { useState, useEffect } from "react";
import db from "./firebase";
import { doc, collection, query, onSnapshot, setDoc } from "firebase/firestore";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));

    onSnapshot(q, (querySnapshot) => {
      setList(querySnapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  let index = 0;

  const inputSubmit = async (e) => {
    e.preventDefault();

    if (todo !== ` `) {
      await setDoc(doc(db, "todos", "todo"), { todo: todo });
    }
    setTodo(" ");
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input value={todo} onChange={inputChange} />
      <button type="submit" onClick={inputSubmit}>
        OK
      </button>
      <div>
        <ul>
          {todoList.map((t, i) => {
            return (
              <li key={i} style={{ listStyle: "none", margin: 10 }}>
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
