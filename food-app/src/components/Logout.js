import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function Logout() {
    const {setLoggedIn, setUser} = useContext(UserContext)
    setLoggedIn(false)
    setUser({})
    return (
        <Redirect to = "/"/>
    )
}

export default Logout
