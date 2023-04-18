import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/Home.css'
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import { useMyDataContext } from '../context/DataContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Home = () => {
 


  const {card}=useMyDataContext()
  const [filteredData,setFilteredData]=useState([])
  const [num,setNum]=useState(0)
  const ref=useRef()
useEffect(()=>{
   setFilteredData(card.slice())
},[card])

 const search=()=>{
  const data=card.filter((val)=>(val.name.toLowerCase().includes(ref.current.value.toLowerCase())))
  setFilteredData(data)

 }
 const buttonstyle=useMemo(()=>(
  {
  display:num===0?"none":"block",


  }



),[num])
const buttonstyle2=useMemo(()=>(
  {
  display:num>card.length-10?"none":"block",

  }



),[num,card])
  return (
    <div>
        <div className="search">
            <div className='inputContainer'>
                <SearchIcon></SearchIcon>
            <input ref={ref} type='text' onChange={search}  className='input' placeholder='Search your furniture'></input>
            </div>

            
        </div>
        <div className='cards'>
                {filteredData && filteredData.map && filteredData.slice(num,num+10).map((card,val)=>(
                  <Card key={val} data={card}/>
                ))}
            </div>

            <div className="pagination">

              <ArrowBackIosNewIcon fontSize='large' style={buttonstyle}  onClick={()=>setNum(p=>p-10)}>previous</ArrowBackIosNewIcon>
              {num===0 && <ArrowBackIosNewIcon style={{opacity:"0.2"}} fontSize='large' disabled>previous</ArrowBackIosNewIcon>}
              <ArrowForwardIosIcon fontSize='large' style={buttonstyle2} onClick={()=>setNum(p=>p+10)}>next</ArrowForwardIosIcon>
              {num>card.length-10 &&  <ArrowForwardIosIcon style={{opacity:"0.2"}} fontSize='large' disabled={true}>next</ArrowForwardIosIcon>  }

            </div>
      
    </div>
  )
}

export default Home
