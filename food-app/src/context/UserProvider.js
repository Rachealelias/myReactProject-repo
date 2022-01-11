import React, {useState} from 'react'
const UserContext = React.createContext()

function UserProvider({children}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})
     
     
    return (
        <div>
           <UserContext.Provider value={{loggedIn, setLoggedIn, user, setUser}}>
               {children}
               </UserContext.Provider> 
        </div>
    )
}

export {UserProvider, UserContext} 
