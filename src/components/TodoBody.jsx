import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoHeader from "./TodoHeader";
import { useState } from "react";

function TodoBody({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoHeader onSubmit={submitUpdate} edit={edit} />;
  } else {
    return todos.map((todo, index) => (
      <div
        id="task"
        className="task-container d-flex flex-row justify-content-between align-items-center mt-3 position-relative"
        key={index}
      >
        <div className="task-name ">
          <span className="lead">{todo.text}</span>
        </div>
        <div className="action-btns">
          <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
            <FontAwesomeIcon icon={faEdit} className="edit-btn me-2" />
          </button>
          <button onClick={() => removeTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrash} className="delete-btn" />
          </button>
        </div>
      </div>
    ));
  }
}

export default TodoBody;
