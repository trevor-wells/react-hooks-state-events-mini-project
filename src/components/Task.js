import React from "react"

export default function Task({text, category, setTasks}) {

  function handleDelete(){
    setTasks(prevTasks => prevTasks.filter(task => task.text !== text))
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  )
}
