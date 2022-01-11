import React,{useState,useContext} from 'react'
import {useHistory, Link ,Redirect}from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function Login() {
const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {user,setUser, loggedIn, setLoggedIn} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim() ==="" || password.trim() ==="" ){
            alert("Please fill out all the fields, thank you!!!")
            return null
        }
        const newUser = { email, password}

        fetch("http://localhost:3001/users")
        .then((r) => r.json())
        .then(data => {
        const userObj = data.find(user => user.email === email && user.password===password)
        if(userObj){
            setLoggedIn(true)
            setUser(userObj)
        }else{
            setError('Incorrect email or password')
        }
        })
       
        .catch((err) => {
            console.log("Error:" , err)
        })
        
        setEmail("")
        setPassword("")
   // history.push("/foods") 
    }
    if (loggedIn){
  return <Redirect to ="/foods"/>
    }

    return (
        <div>
           <h4>{error}</h4> 
           <form onSubmit={handleSubmit}>
                
                <label htmlFor="email">Email</label>
                <input onChange={e => setEmail(e.target.value)} type="text" name="email" id="email" value={email} required/><br /><br />
                <label htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="pwd" value={password} required/><br /><br />
                
                <input type="submit" value="Login" />
            </form>  
            <span>Not Signed up? please</span> <Link to='/signup'><button>Sign up</button></Link>
        </div>
    )
}

export default Login
