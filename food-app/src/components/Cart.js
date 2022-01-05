import React,{useState} from 'react'

function Cart() {
    const [cart, setCart] = useState([]);
     const [cartView, setCartView] = useState(false)

     const addToCart = (food) => {
        if(!cart.find(atc => atc.name === food.name)) {
            setCart(currentCart => [...currentCart, food])
            alert (`${food.name} was  added to cart!`)
       }
    }
    return (
        <div>
            
        </div>
    )
}

export default Cart
