 import React from 'react'
 import {Link} from 'react-router-dom'
 

 function FoodCard({food:{id,image,name,description,category}}) {


    
    
     return (
         <div className='food-card'>
         <img style={{height:'300px', width:'300px'}} src={image} alt={`${name}`} />  
         <h5>{name}</h5> 
         <h5>{description}</h5>
         <h5>{category}</h5>
         <Link to={`/foods/${id}`}>Details</Link>
         
         </div>
     )
 }

 export default FoodCard
