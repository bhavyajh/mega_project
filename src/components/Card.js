import React from "react";
import "../styles/Cards.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "./axios";
import { useMyDataContext } from "../context/DataContext";
//CARD COMPONENT TO DISPLAY LIST OF ITEMS IN CARD FORMAT, PRESENT IN BACKENED 
const Card = ({ data }) => {



  const {role}=useMyDataContext()
  const {setMe}=useMyDataContext()
  const del=(Id)=>{
    axios.delete(`/api/Furniture/${Id}`).then(()=>{
      alert("deleted");
    }).then(()=>{
      setMe(p=>!p)
    })
    

  }
  return (
    <div>
      <div className="cardContainer">
        <div className="image_container">
          <img src={data.ImageSrc1} alt="table" />
        </div>
        <h3 style={{ textAlign: "center", marginTop: "1rem" }}>{data.Name}</h3>
        <h3
          style={{
            overflow: "hidden",
            height: "5rem",
            opacity: "0.7",
            marginTop: "1rem",
            textAlign: "center",
          }} >
          Description :{data.Description}
        </h3>
        <h3 style={{ margin: "0.5rem", textAlign: "center" }}>
          Price: {data.Price}$
        </h3>
        
      <div style={{width:"100%",height:"fit-content",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
      {role==="seller" &&<DeleteIcon  onClick={()=>del(data?.Id)} fontSize="large" className={`${role==="seller"?"ok":"notok"}`}></DeleteIcon>}

<Link
  style={{
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  }}
  className={`${role==="seller"?"ok":"notok"}`}
  to={`/details/${data?.Id}`}>
  <button className="buttons"> VIEW DETAILS</button>
</Link>
 
 <Link to={`/update/${data.Id}`}>{role==="seller" && <EditIcon  fontSize="large" className={`${role==="seller"?"ok":"notok"}`}></EditIcon>}</Link>  
      </div>

 
      </div>
    </div>
  );
};

export default Card;
