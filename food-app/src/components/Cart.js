// import React,{useState, useEffect} from 'react'
// import FoodCard from './foods/FoodCard';
// //import FoodDetails from './foods/FoodDetails';


// function Cart() {
//     const [cart, setCart] = useState([]);
//      //const [cartView, setCartView] = useState(false)
//      useEffect(() =>{
//          fetch("http://localhost:3001/foods")
//          .then(resp => resp.json())
//          .then(foods => {
//         const foodCart = foods.filter(food => !!food.cart)
//         setCart(foodCart)
//          })
//      })

//      const addToCart = cart.map(food => <FoodCard  key={food.id} food={food}/>)
    
//     //  const addToCart = (food) => {
//     //     if(!cart.find(atc => atc.name === food.name)) {
//     //         setCart(currentCart => [...currentCart, food])
//     //         alert (`${food.name} was  added to cart!`)
//     //    }
//     // }
//     return (
//         <div>
//             {addToCart}
//         </div>
//     )
// }

// export default Cart
