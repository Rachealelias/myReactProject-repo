 import React from 'react'
 import {Link} from 'react-router-dom'
 import { Card } from '../styled-components/Style'
 

 function FoodCard({food:{id,image,name,description,category}}) {


    
    
     return (
         <Card>
         <h3>{name}</h3> 
         <img src={image} alt={`${name}`} />  
         <h3>{description}</h3>
         <h3>{category}</h3>
         <Link to={`/foods/${id}`}>Details</Link>
         
         </Card>
     )
 }

 export default FoodCard
