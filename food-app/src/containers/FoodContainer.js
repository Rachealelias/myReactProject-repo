import React,{useState, useEffect} from 'react'
import FoodForm from '../components/foods/FoodForm';
import FoodList from "../components/foods/FoodList"

// function FoodContainer() {

//     const [foods, setFoods] = useState([]);
//     const fetchData = async ()=> {
//         try{
//             const resp = await fetch("http://localhost:3001/foods")
//             const data = await resp.json()
//             setFoods(data)
//         } catch (error){
//             alert(error)
//         }
//     }
//     useEffect(() =>{
//         fetchData()
//     }, [])

//     function handleAddFood(newFood) {
//         setFoods([...foods, newFood]);
//       }
    
//     return (
//         <div className='food-container'>
//           <FoodList foods={foods}/> 
//           <FoodForm  handleAddFood={handleAddFood}/> 
//         </div>
//     )
// }

// export default FoodContainer

