import axios from '../components/axios.js'
import React, { createContext, useContext, useEffect, useState } from 'react'
const MyContext=createContext()

function DataContext({children}) {
    const [card,setCard]=useState([])
    const [role,setRole]=useState("")
    const [user,setUser]=useState("")
    const [me,setMe]=useState(false)
    useEffect(()=>{
  axios.get("/api/Furniture").then((res)=>{
    setCard(res.data)
  }).catch((er)=>{
    console.log(er.message);
  })
    },[])

    useEffect(()=>{
      setRole(localStorage.getItem("role"))
    },[])
  return (
    <MyContext.Provider value={{card,user,setUser,role,setRole,me,setMe}}>
      {children}
    </MyContext.Provider>
  )
}

export function useMyDataContext(){
    return useContext(MyContext)
}

export default DataContext
