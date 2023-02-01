import React from "react";
import "../styles/task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <section className="task-text" onClick={() => completeTask(id)}>
        {text}
      </section>
      <section className="task-icon" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </section>
    </div>
  );
};

export default Task;
