
import "../styles/Navbar.css";
import { Link, Outlet } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";

import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useMyDataContext } from "../context/DataContext";


const Navbar = () => {

  const {role}=useMyDataContext()
  const navigate=useNavigate();
  
  const logout=()=>{
    localStorage.clear();
    navigate("/signin")
  }

 

  return (
    <div>
      <div className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ textDecoration: "none" }} to="/home">
            <div className="m_item">
              <HomeIcon fontSize="large" />

              {/* <h2 className="item">Home</h2> */}
            </div>
          </Link>
       
          <Link
            style={{ textDecoration: "none", marginLeft: "1rem" }}
            to="/post"
          >
 

         {role==="seller" &&   <div className="m_item">
              <PostAddIcon  fontSize="large" />

              {/* <h2 className="item">Post Furniture</h2> */}
            </div>}

         
          </Link>
          <div>
          <LogoutIcon fontSize="large" style={{color:"#0b6efd",marginTop:".7rem",marginLeft:"80rem"}} onClick={logout}></LogoutIcon>
          </div>
        </div>

      
        <Link to="/">
          {" "}
          <CloseIcon className="m_item" fontSize="large"></CloseIcon>
        </Link>

        
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
