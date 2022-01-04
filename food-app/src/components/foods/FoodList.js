 import React,{useState} from 'react'
 import FoodCard from './FoodCard'
 import CategoryFilter from './CategoryFilter'

 function FoodList({foods}) {
      const[selectedCategory, setSelectedCategory] = useState("All")
      
  function handleCategoryChange(category) {
         setSelectedCategory(category);
      }

      const catToDisplay = foods.filter((food) => {
        return (selectedCategory === "All") || food.category === selectedCategory
     })
    
     const displayFoods = catToDisplay.map((food) => 
     <FoodCard  key={food.id} food={food} catToDisplay={catToDisplay}/>)
     return (
         <div className='food-list'>
             {<CategoryFilter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/> }
           {displayFoods}    
         </div>
     )
 }

 export default FoodList
