import React, {useState, useEffect} from 'react'
const FoodContext = React.createContext()

function FoodsProvider({children}) {

    const [foods, setFoods] = useState([]);
     
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
    return (
        <div>
           <FoodContext.Provider value={{foods, setFoods}}>
               {children}
               </FoodContext.Provider> 
        </div>
    )
}

export {FoodsProvider, FoodContext} 
