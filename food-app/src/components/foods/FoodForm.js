import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

function FoodForm() {

    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Rice")
    const [price, setPrice] = useState("")
    const [side, setSide] = useState("")
    const [status, setStatus] = useState("Available")
    const [size, setSize] = useState("")
    const [image, setImage] = useState("")
    const [cart, setCart] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if ([name, description, category, price, side, status, size,image, cart].some(val => val.trim() === "")) {
            alert("Please fill out all the fields, thank you!!!")
            return null
        }
        const newFoods = {name, description, category, price, side, status, size, image, cart}

        fetch("http://localhost:3001/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFoods)
        })
        setName("")
        setDescription("")
        setCategory("")
        setPrice("")
        setSide("")
        setStatus("")
        setSize("")
        setImage("")
        setCart("")
        history.push("/Foods")
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" value={name} required/><br /><br />
                <label htmlFor="description">Description</label>
                <input onChange={e => setDescription(e.target.value)} type="text" name="description" id="description" value={description} required/><br /><br />
                <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Rice">Rice</option>
          <option value="Soup">Soup</option>
          <option value="Stew">Stew</option>
          <option value="Appetizers">Appetizers</option>
        </select>
      </label>
                <label htmlFor="price">Price</label>
                <input onChange={e => setPrice(e.target.value)} type="text" name="price" id="price" value={price} required/><br /><br />
                <label htmlFor="side">Side</label>
                <input onChange={e => setSide(e.target.value)} type="text" name="side" id="side" value={side} required/><br /><br />
                <label htmlFor="status">Status</label>
                <input onChange={e => setStatus(e.target.value)} type="text" name="status" id="status" value={status} required/><br /><br />
                <label htmlFor="size">Size</label>
                <input onChange={e => setSize(e.target.value)} type="text" name="size" id="size" value={size} required/><br /><br />
                <label htmlFor="image">Image Url</label>
                <input onChange={e => setImage(e.target.value)} type="text" name="image" id="image" value={image} required/><br /><br />
                <input type="submit" value="Create" />
            </form> 
        </div>
    )
}

export default FoodForm
