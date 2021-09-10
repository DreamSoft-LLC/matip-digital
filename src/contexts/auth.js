import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react"
import { API_SERVER } from "../config";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);

    const [userData, setUserData] = useState()
    const [isAuthToggle, setIsAuthToggle] = useState(false)

    const [wms,setWMS] = useState(false)
    // check localstorage for session
    const checkAuth = () => {
        const session_key = localStorage.getItem('session-token')
        console.log(session_key)
        if (session_key == null) {
            setIsAuth(false);
            return;
        }
        // validate session key;
        axios.get(API_SERVER + '/dashboard', { headers: { 'auth-token': session_key } }).then(response => {
            // set isAuth to true 
            console.log(response.data);
            setIsAuth(true);
            return;
        }).catch(error => {
            console.log(error)
            return;
        })
    }


    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth,  setIsAuth,userData, setUserData ,isAuthToggle, setIsAuthToggle,wms,setWMS}}>
            {children}
        </AuthContext.Provider>
    )
}


export function AuthConsumer() {
    return useContext(AuthContext)
}




