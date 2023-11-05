import React, { useState, useEffect } from "react";

import TaskForm from "./components/taskForm";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/todo.png";
import processingIcon from "./assets/processing.png";
import doneIcon from "./assets/done.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Processing"
          icon={processingIcon}
          tasks={tasks}
          status="processing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
