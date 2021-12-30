 import React,{useState} from 'react'
 import FoodCard from './FoodCard'
 import CategoryFilter from './CategoryFilter'

 function FoodList({foods}) {
    //  const[selectedCategory, setSelectedCategory] = useState("")

    // function handleCategoryChange(category) {
    //     setSelectedCategory(category);
    //   }


    
    // .filter((food) => {
    //     if(selectedCategory === "All") return true;

    //     return food.category === selectedCategory
    // })
     const displayFoods = foods
    .map((food) => <FoodCard  key={food.id} food={food}/>)
     return (
         <div className='food-list'>
           {displayFoods}  
           {/* <CategoryFilter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/> */}
         </div>
     )
 }

 export default FoodList
