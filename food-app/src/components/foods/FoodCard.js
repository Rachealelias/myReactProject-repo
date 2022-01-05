 import React from 'react'
 import {Link} from 'react-router-dom'
 

 function FoodCard({food:{id,image,name,description,category},setCart,food}) {


    function handleAddToCartClick() {
        fetch(`http://localhost:3001/foods/${food.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: !food.cart,
          }),
        })
          .then((r) => r.json())
          .then((updateItem) => setCart(updateItem));
      }
    
     return (
         <div className='food-card'>
         <img style={{height:'300px', width:'300px'}} src={image} alt={`${name}`} />  
         <h5>{name}</h5> 
         <h5>{description}</h5>
         <h5>{category}</h5>
         <Link to={`/foods/${id}`}>Details</Link>
         <button onClick={handleAddToCartClick}>
         {food.cart ? "Delete From" : "Add to"} Cart
             </button>
         </div>
     )
 }

 export default FoodCard
