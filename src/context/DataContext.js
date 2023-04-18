import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
const MyContext=createContext()

function DataContext({children}) {
    const [card,setCard]=useState([])
    useEffect(()=>{
  axios.get("https://localhost:7074/api/Furniture").then((res)=>{
    setCard(res.data)
  }).catch((er)=>{
    console.log(er.message);
  })
    },[])
  return (
    <MyContext.Provider value={{card}}>
      {children}
    </MyContext.Provider>
  )
}

export function useMyDataContext(){
    return useContext(MyContext)
}

export default DataContext
