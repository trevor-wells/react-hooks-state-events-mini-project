import React, {useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES , TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDeleteTask(deletedTaskText){
    setTasks(prevTasks => prevTasks.filter(task => task.text !== deletedTaskText))
  }

  function filterList(cat){
    setCategory(cat)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onFilter={filterList}/>
      <NewTaskForm />
      <TaskList onDeleteTask={handleDeleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
