import React,{useState, useEffect,useContext} from 'react'
import FoodCard from './foods/FoodCard';
import { FoodContext } from '../context/FoodsProvider'


function Cart() {
    const [cart, setCart] = useState([]);
    const {foods} = useContext(FoodContext)
    const itemsInCart = foods.filter(food => food.cart)
     
    //  useEffect(() =>{
    //      fetch("http://localhost:3001/foods")
    //      .then(resp => resp.json())
    //      .then(foods => {
    //     const foodCart = foods.filter(food => !!food.cart)
    //     setCart(foodCart)
    //      })
    //  })

     const addToCart = itemsInCart.map(food => <FoodCard  key={food.id} food={food}/>)
    
    
    return (
        <div>
            {addToCart}
        </div>
    )
}

export default Cart
