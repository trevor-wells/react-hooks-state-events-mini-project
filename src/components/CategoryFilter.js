import React from "react";

function CategoryFilter({categories, onFilter}) {
  
  const categoryButtons = categories.map(category => <button key={category} onClick={handleClick}>{category}</button>)
  
  function handleClick(event){
    event.target.className = "selected"
    console.log(event.target.className)
    onFilter(event.target.key)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
