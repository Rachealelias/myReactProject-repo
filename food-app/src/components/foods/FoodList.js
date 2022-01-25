import React,{useState} from 'react'
import FoodCard from './FoodCard'
import CategoryFilter from './CategoryFilter'
import { Container } from '../styled-components/Style'


function FoodList({foods, deleteFood}) {
     const[selectedCategory, setSelectedCategory] = useState("All")
     
 function handleCategoryChange(category) {
        setSelectedCategory(category);
     }

     const catToDisplay = foods.filter((food) => {
       return (selectedCategory === "All") || food.category === selectedCategory
    })
   
    const displayFoods = catToDisplay.map((food) => 
    <FoodCard  key={food.id} food={food} catToDisplay={catToDisplay} deleteFood={deleteFood}/>)
    return (
        <div>
         {<CategoryFilter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/> }
          <Container>{displayFoods}</Container>    
        </div>
    )
}



export default FoodList