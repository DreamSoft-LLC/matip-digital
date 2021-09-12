import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react"
import { API_SERVER } from "../config";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false);

    const [userData, setUserData] = useState()
    const [isAuthToggle, setIsAuthToggle] = useState(false)

    const [wms, setWMS] = useState(false)
    // check localstorage for session
    const checkAuth = () => {
        const session_key = localStorage.getItem('auth-login')
        console.log(session_key)
        if (session_key == null) {
            setIsAuth(false);
            return;
        } else {
            setIsAuth(true)
        }
    }


    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, userData, setUserData, isAuthToggle, setIsAuthToggle, wms, setWMS }}>
            {children}
        </AuthContext.Provider>
    )
}


export function AuthConsumer() {
    return useContext(AuthContext)
}




