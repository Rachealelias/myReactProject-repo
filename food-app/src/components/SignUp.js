import React,{useState} from 'react'
import {useHistory, Link }from 'react-router-dom'
import { SignupStyle } from './styled-components/Style'

function SignUp() {
const history = useHistory()
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstname.trim() ==="" || lastname.trim() ==="" || email.trim() ==="" || password.trim() ==="" ){
            alert("Please fill out all the fields, thank you!!!")
            return null
        }
        const newUser = {firstname, lastname, email, password}

        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then((r) => r.json())
       
        .catch((err) => {
            console.log("Error:" , err)
        })
        
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
         history.push("/foods") 
    }

    return (
        <div>
            <SignupStyle>
           <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input onChange={e => setFirstName(e.target.value)} type="text" name="firstname" id="firstname" value={firstname} required/><br /><br />
                <label htmlFor="lastname">Lastname</label>
                <input onChange={e => setLastName(e.target.value)} type="text" name="lastname" id="lastname" value={lastname} required/><br /><br />
                <label htmlFor="email">Email</label>
                <input onChange={e => setEmail(e.target.value)} type="text" name="email" id="email" value={email} required/><br /><br />
                <label htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="pwd" value={password} required/><br /><br />
                
                <input type="submit" value="Sign Up" />
            </form>  
            <span>Signed up? please</span> <Link to='/login'><button>Login</button></Link>
            </SignupStyle>
        </div>
    )
}

export default SignUp
