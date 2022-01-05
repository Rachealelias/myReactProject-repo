 import React from 'react'
 

 function FoodCard({food}) {
     return (
         <div className='food-card'>
         <img style={{height:'300px', width:'300px'}} src={food.image} alt={`${food.name}`} />  
         <h5>{food.name}</h5> 
         <h5>{food.description}</h5>
         <h5>{food.category}</h5>
         <button>Add To Cart</button>
         </div>
     )
 }

 export default FoodCard
