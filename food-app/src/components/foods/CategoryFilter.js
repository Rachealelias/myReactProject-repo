import React from 'react'

function CategoryFilter({selectedCategory, handleCategoryChange}) {
    return (
        <div className='category-filter'>
           <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Rice">Rice</option>
        <option value="Soup">Soup</option>
        <option value="Stew">Stew</option>
        <option value="Appetizers">Appetizers</option>
      </select> 
        </div>
    )
}

export default CategoryFilter
