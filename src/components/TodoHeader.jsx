import React from "react";
import { useEffect, useRef, useState } from "react";

function TodoHeader({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} id="new-task-form">
      <div className="input-group">
        <input
          id="new-task-input"
          type="text"
          ref={inputRef}
          className="form-control todo-input rounder-0"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={edit ? false : ""}
        />
        <button className="btn btn-primary  rounded-0" onSubmit={handleSubmit}>
          {edit ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
}

export default TodoHeader;
