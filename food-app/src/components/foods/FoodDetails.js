import React,{useState,useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
//import { useEffect } from 'react/cjs/react.development';
import { FoodContext } from '../../context/FoodsProvider';

function FoodDetails() {
    let {foodId} = useParams();
    const history = useHistory()
    const [food, setFood] = useState({})
    const {foods, setFoods} = useContext(FoodContext)

    useEffect(() => {
        fetch(`http://localhost:3001/foods/${foodId}`)
        .then( resp => resp.json())
        .then(food => setFood(food))
        .catch(err => alert(err))
    }, [foodId])

    function handleAddToCartClick() {
        fetch(`http://localhost:3001/foods/${foodId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: !food.cart,
          }),
        })
        .then(resp => resp.json())
        .then(data => {
        const newArray = foods.map(food => {
          return food.id === data.id ? data : food
        })
        setFoods(newArray)
        })
        history.push("/foods")
          //.then((r) => r.json())
         // .then((updateItem) => setCart(updateItem));
      }

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
           <button onClick={handleAddToCartClick}>
         {food.cart ? "Delete From" : "Add to"} Cart
             </button>
            </div>
    )
}

export default FoodDetails
