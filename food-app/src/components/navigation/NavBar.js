import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration:"none",
    color:"blue",
    backgroundColor: "rgb()",
    fontWeight: "bold",
    verticalAlign: "center"
}

function NavBar() {
    return (
        <div>
           <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
           exactstyle={style}
           to="/"
           >Home</NavLink> 

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
           exactstyle={style}
           to="/about"
           >About</NavLink> 

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
           exactstyle={style}
           to="/foods"
           >Foods</NavLink> 

            <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
           exactstyle={style}
           to="/foods/new"
           >Add Food</NavLink> 
        </div>
    )
}

export default NavBar
