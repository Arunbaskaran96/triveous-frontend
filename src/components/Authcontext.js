import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../base"


export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState("")

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsub()
        }
    },[])

    return(
        <AuthContext.Provider value={{user,signUp,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(AuthContext)
}