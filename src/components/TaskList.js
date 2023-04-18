import React from "react";
import Task from "./Task"

function TaskList(props) {
  
  const tasks = props.tasksData.map(taskData =>
  <Task
    key={taskData.text}
    text={taskData.text}
    category={taskData.category}
    onDeleteTask={props.onDeleteTask}
    />
  )

  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
