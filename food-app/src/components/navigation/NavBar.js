import React,{useContext}from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import { FoodContext } from '../../context/FoodsProvider'

function NavBar() {
    const {foods} = useContext(FoodContext)
    const itemsInCart = foods.filter(food => food.cart)
    return (
        <div className='nav-bar'>
           <NavLink
            activeStyle={{
                fontWeight:"bolder",
                color: "red"
            }}
          to="/"
           >Home</NavLink> 

            <NavLink
            activeStyle={{
                fontWeight:"bolder",
                color: "red"
            }}
          to="/about"
           >About</NavLink> 

            { <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
          to="/foods"
           >Foods</NavLink>  }

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
           to="/foods/new"
           >NewFood</NavLink> 

           <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
          to="/cart"
           >Cart({itemsInCart.length})</NavLink> 
        </div>
    )
}

export default NavBar
