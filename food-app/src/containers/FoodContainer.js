import React,{useState, useEffect} from 'react'
import Search from '../components/foods/Search';
import FoodList from "../components/foods/FoodList"


 function FoodContainer() {

     const [foods, setFoods] = useState([]);
     const [search, setSearch] = useState("")
     //const [cart, setCart] = useState([]);
     //const [cartView, setCartView] = useState(false)
    // const [SignedUp, setSignedUp] = useState(false);
     
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

     const FoodArray = foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
  );

    // const addToCart = (food) => {
    //     if(!cart.find(atc => atc.name === food.name)) {
    //         setCart(currentCart => [...currentCart, food])
    //         alert (`${food.name} was successfully added to cart!`)
    //     }
    // }
    
     return (
         <div className='food-container'>
             {/* <button onClick={() => setCartView(bool => !bool)}>Cart</button> */}
             <Search search={search} setSearch={setSearch}/>
           <FoodList foods={FoodArray}/> 
           
         </div>
     )
 }

 export default FoodContainer

