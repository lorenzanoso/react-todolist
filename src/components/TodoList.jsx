import React from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, newVal) => {
    if (!newVal.text) {
      return;
    }
    const newTodos = todos.map((item) => (item.id === id ? newVal : item));

    setTodos(newTodos);
  };

  return (
    <header>
      <h3>Task List for year 2022</h3>
      <br />
      <TodoHeader onSubmit={addTodo} />
      <br />
      <hr />
      <br />
      <TodoBody todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </header>
  );
}

export default TodoList;
