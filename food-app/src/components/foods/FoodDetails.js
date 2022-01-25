import React,{useState,useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { Details } from '../styled-components/Style';
import { FoodContext } from '../../context/FoodsProvider';
import { UserContext } from '../../context/UserProvider';

function FoodDetails() {
    let {foodId} = useParams();
    const history = useHistory()
    const [food, setFood] = useState({})
    const {foods, setFoods} = useContext(FoodContext)
    const {user} = useContext(UserContext)

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
        <div >
          <Details>
           <h3>{name}</h3>
           <img alt="food logo" src={image} /><br />
           <p>{description}</p> 
           <p>{category}</p>
           <p>${price}</p>
           <p>{side}</p>
           <p>{status}</p>
           <p>{size}</p>
         { Object.keys(user).length>1 ? <button onClick={handleAddToCartClick}>
         {food.cart ? "Delete From" : "Add to"} Cart
             </button> : "Please log in/ sign up to add to cart"}
             </Details>
            </div>
    )
}

export default FoodDetails