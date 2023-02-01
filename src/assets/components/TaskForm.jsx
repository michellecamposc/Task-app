import React, { useState } from "react";
import "../styles/taskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSending = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={handleSending}>
      <input
        className="task-input"
        type="text"
        placeholder="Add a task"
        name="text"
        onChange={handleChange}
      />
      <button className="task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
