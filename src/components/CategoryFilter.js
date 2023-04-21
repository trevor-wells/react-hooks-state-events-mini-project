import React from "react"

export default function CategoryFilter({categories, setCategory, selectedCategory}) {
  
  let categoryButtons = categories.map(category =>
  <button
    key={category}
    id={category}
    onClick={handleFilter}
    className={selectedCategory === category ? "selected" : ""}>
    {category}
  </button>)
  
  function handleFilter(event){
    setCategory(event.target.id)
  }

  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categoryButtons}
    </div>
  )
}
