import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Details.css";


const Details = () => {
  const {id} = useParams();
 

  
  const [data, setData] = useState({});
  const [primary,setPrimary]=useState("")


  useEffect(() => {
    axios
      .get(`https://localhost:7074/api/Furniture/${parseInt(id)}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  useEffect(()=>{
    setPrimary(data.imageSrc1)

  },[data])
  console.log(data);
  const setImg=(val)=>{
    setPrimary(val)
  }
 
  return (
    <div style={{width:"90%",height:"90vh",margin:"4rem",boxShadow:"rgba(0,0,0,0.35) 0px 5px 15px"}}>
     <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}} className="first">
     <img style={{mixBlendMode:"multiply"}}  width={"300"} height={"300"} marginTop={"2rem"} src={primary} alt=""/>
     </div>
        <div style={{width:"100%",height:"40vh",display:"flex",alignItems:"left",justifyContent:"center",marginBottom:"2rem"}}  className="imageContainer">
       

<img style={{mixBlendMode:"multiply"}} width={"100"} height={"100"} border={"1px solid black"} onClick={()=>setImg(data.imageSrc2)} src={data.imageSrc2} alt=""/>
<img style={{mixBlendMode:"multiply"}}   width={"100"} height={"100"} border={"1px solid black"} onClick={()=>setImg(data.imageSrc3)}  src={data.imageSrc3} alt=""/>
<img style={{mixBlendMode:"multiply"}}   width={"100"} height={"100"} border={"1px solid black"} onClick={()=>setImg(data.imageSrc4)}  src={data.imageSrc4} alt=""/>
        </div>
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}} className="des">
         <h1 style={{marginTop:"-14rem"}} > {data.name}</h1>
          <p>Description : {data.description}</p>
          <p>{data.price}</p>
          <br></br>
          <Link to="/home"><button className="continue_butt">CONTINUE SHOPPING</button></Link>
        </div>
   
    </div>
  );
};

export default Details;
