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
        <h3>Name:{data.name}</h3>
        <p>Id : {data.id}</p>
        
        <p style={{overflow:"hidden",height:"5rem",opacity:"0.7"}}>Description :{data.description}</p>
        <h3 style={{margin:"0.5rem"}}>Price: {data.price}$</h3>
        
        <div style={{marginTop:"2rem"}} className="button_container">
        <Link style={{textDecoration:"none", color:"white",cursor:"pointer"}} to={`/details/${data.id}`}>
        <button style={{cursor:"pointer"}} class="cta">
    <span class="hover-underline-animation"> Shop now </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        </Link>

            </div>
      </div>
    </div>
  );
};

export default Card;
