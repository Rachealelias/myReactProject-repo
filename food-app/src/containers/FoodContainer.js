import React,{useState, useContext} from 'react'
import Search from '../components/foods/Search';
import FoodList from "../components/foods/FoodList"
import {FoodContext} from '../context/FoodsProvider'

//import Cart from '../components/Cart';


 function FoodContainer() {
const {foods, setFoods} = useContext(FoodContext)
console.log(foods)
    //  const [foods, setFoods] = useState([]);
     const [search, setSearch] = useState("")
     
    // const [SignedUp, setSignedUp] = useState(false);
     
    //  const fetchData = async ()=> {
    //      try{
    //          const resp = await fetch("http://localhost:3001/foods")
    //          const data = await resp.json()
    //          setFoods(data)
    //      } catch (error){
    //          alert(error)
    //      }
    //  }
    //  useEffect(() =>{
    //      fetchData()
    //  }, [])

    function deleteFood(id){
        const foodsFiltered = foods.filter(f => f.id !== id);
        console.log(id)
            setFoods(foodsFiltered);
            console.log(foods)
      }

     const FoodArray = foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
  );

     
    
     return (
         <div className='food-container'>
             
          <Search search={search} setSearch={setSearch}/>
           <FoodList foods={FoodArray} deleteFood={deleteFood}/>   
         </div>
     )
 }

 export default FoodContainer

