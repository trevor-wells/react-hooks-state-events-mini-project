import React from "react"

export default function CategoryFilter({categories, setCategory}) {
  
  let categoryButtons = categories.map(category =>
  <button key={category} id={category} onClick={handleFilter}>
    {category}
  </button>)
  
  function handleFilter(event){
    event.target.className = "selected"
    setCategory(event.target.id)
  }

  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categoryButtons}
    </div>
  )
}
