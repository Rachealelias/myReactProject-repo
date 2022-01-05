import React,{useState, useEffect} from 'react'
import FoodCard from './foods/FoodCard';



function Cart() {
    const [cart, setCart] = useState([]);
     
     useEffect(() =>{
         fetch("http://localhost:3001/foods")
         .then(resp => resp.json())
         .then(foods => {
        const foodCart = foods.filter(food => !!food.cart)
        setCart(foodCart)
         })
     })

     const addToCart = cart.map(food => <FoodCard  key={food.id} food={food}/>)
    
    
    return (
        <div>
            {addToCart}
        </div>
    )
}

export default Cart
