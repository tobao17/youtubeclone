import React, { useState } from "react";
import "./App.css";

import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "di hoc" },
    { id: 2, title: "di cho" },
    { id: 3, title: "di tam" },
    { id: 4, title: "di choi" },
  ]);
  function handletodoclick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodolist = [...todoList];
    newTodolist.splice(index, 1);
    setTodoList(newTodolist);
  }
  function handleFormSummit(formvalue) {
    console.log(formvalue);
    const newTodo = {
      id: todoList.length + 1,
      ...formvalue,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  }
  return (
    <div>
      <TodoForm onsubmit={handleFormSummit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handletodoclick}></TodoList>
    </div>
  );
}

export default App;
