 import React,{useContext} from 'react'
 import {Link} from 'react-router-dom'
 import { Card } from '../styled-components/Style'
 import { UserContext } from '../../context/UserProvider';
 

 function FoodCard({food:{id,image,name,description,category},food,deleteFood}) {
    const {user} = useContext(UserContext)
    function handleDeleteClick() {
        fetch(`http://localhost:3001/foods/${food.id}`, {
          method: "DELETE",
        })
          .then(r => r.json())
          .then(data => {
        
           deleteFood(food.id)
            console.log(data, 'deleted item')
          });
      }

     return (
         <Card>
         <h3>{name}</h3> 
         <img src={image} alt={`${name}`} />  
         <h3>{description}</h3>
         <h3>{category}</h3>
         <Link to={`/foods/${id}`}>Details</Link>
         { Object.keys(user).length<1 || user.firstname !== "Racheal" || user.email !=="admin@gmail.com" ? null : <button onClick={handleDeleteClick}>Delete</button>}
         
         </Card>
     )
 }

 export default FoodCard
