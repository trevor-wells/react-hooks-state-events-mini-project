import React from "react"
import Task from "./Task"

export default function TaskList({tasks, setTasks}) {
  
  const myTaskList = tasks.map(task =>
  <Task
    key={task.text}
    text={task.text}
    category={task.category}
    setTasks={setTasks}
    />
  )

  return (
    <div className="tasks">
      {myTaskList}
    </div>
  )
}