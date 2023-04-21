import React, {useState} from "react"

export default function NewTaskForm({categories, onTaskFormSubmit}) {

  const categoryOptions = categories.map(category =>
  <option key={category} value={category}>
    {category}
  </option>)

  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  function handleSubmit(event){
    event.preventDefault()
    const newTask = formData
    onTaskFormSubmit(newTask)
    setFormData({
      text: "",
      category: ""
    })
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleChange}
        >
          <option value="All">--choose--</option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  )
}