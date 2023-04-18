import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES , TASKS } from "../data";

function App() {

  function handleDeleteTask()


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList onDeleteTask={handleDeleteTask} tasksData={TASKS}/>
    </div>
  );
}

export default App;
