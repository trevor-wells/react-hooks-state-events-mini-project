import React, {useState, useEffect} from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"
import { CATEGORIES , TASKS } from "../data"

export default function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const tasksToDisplay = category === "All" ? tasks : tasks.filter(task => task.category === category)

  function createNewTask(newTask){
    setTasks(prevTasks => ([...prevTasks, newTask]))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} setCategory={setCategory}/>
      <NewTaskForm categories= {CATEGORIES} onTaskFormSubmit={createNewTask}/>
      <TaskList tasks={tasksToDisplay} setTasks={setTasks}/>
    </div>
  )
}