import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'





function NavBar() {
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
           >Cart</NavLink> 
        </div>
    )
}

export default NavBar
