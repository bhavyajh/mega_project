import React from "react";
import "../styles/Cards.css";

import { Link } from "react-router-dom";
const Card = ({data}) => {

  return (
    <div>
      <div className="cardContainer">
        <div className="image_container">
          <img src={data.imageSrc1} alt="table" />
        </div>
        <h3 style={{textAlign:"center",marginTop:"1rem"}}>{data.name}</h3>
        {/* <p>Id : {data.id}</p> */}
        
        <h3 style={{overflow:"hidden",height:"5rem",opacity:"0.7",marginTop:"1rem",textAlign:"center"}}>Description :{data.description}</h3>
        <h3 style={{margin:"0.5rem",textAlign:"center"}}>Price: {data.price}$</h3>
        
        <div style={{marginTop:"2rem"}} className="button_container">
        <Link style={{textDecoration:"none", color:"white",cursor:"pointer"}} to={`/details/${data.id}`}>
       
<button className="buttons"> VIEW DETAILS
</button>
        </Link>

            </div>
      </div>
    </div>
  );
};

export default Card;
