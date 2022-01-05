import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
//import { useEffect } from 'react/cjs/react.development';

function FoodDetails() {
    let {foodId} = useParams();
    const [food, setFood] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/foods/${foodId}`)
        .then( resp => resp.json())
        .then(food => setFood(food))
        .catch(err => alert(err))
    }, [foodId])

   // const foodClick = foods.find(food => food.id === Number(foodId))
    const {name, description, category, price, side ,status, size, image} = food
    return (
        <div style = {{border:"solid", width:"300px", margin:"auto"}}>
            <img alt="food logo" style={{width:"300px"}} src={image} /><br />
           <h3>{name}</h3>
           <p>{description}</p> 
           <p>{category}</p>
           <p>${price}</p>
           <p>{side}</p>
           <p>{status}</p>
           <p>{size}</p>
            </div>
    )
}

export default FoodDetails
