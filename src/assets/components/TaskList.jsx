import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "../components/Task";
import "../styles/taskList.css";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    }
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </div>
    </>
  );
};