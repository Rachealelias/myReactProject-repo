import React,{useState, useEffect} from 'react'
//import CategoryFilter from '../components/foods/CategoryFilter';
import FoodForm from '../components/foods/FoodForm';
import FoodList from "../components/foods/FoodList"

 function FoodContainer() {

     const [foods, setFoods] = useState([]);
     //const [cart, setCart] = useState([]);
     //const [cartView, setCartView] = useState(false)
     const [SignedUp, setSignedUp] = useState(false);
     
     const fetchData = async ()=> {
         try{
             const resp = await fetch("http://localhost:3001/foods")
             const data = await resp.json()
             setFoods(data)
         } catch (error){
             alert(error)
         }
     }
     useEffect(() =>{
         fetchData()
     }, [])

     

    // const addToCart = (food) => {
    //     if(!cart.find(atc => atc.name === food.name)) {
    //         setCart(currentCart => [...currentCart, food])
    //         alert (`${food.name} was successfully added to cart!`)
    //     }
    // }
    
     return (
         <div className='food-container'>
             {/* <button onClick={() => setCartView(bool => !bool)}>Cart</button> */}
           <FoodList foods={foods}/> 
           
         </div>
     )
 }

 export default FoodContainer

