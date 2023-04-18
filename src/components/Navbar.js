import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import lg from "../image/logo.webp";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from '@mui/icons-material/PostAdd';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="navbar">
      <Link to="/">   <figure className="figure">
     <img src={lg} alt=""/>
        </figure></Link>
        <IconButton onClick={() => setMenu((p) => !p)}>
          <MenuIcon fontSize="large" color="primary"></MenuIcon>
        </IconButton>

        {menu && (
          <div className="menu">
            <IconButton onClick={() => setMenu((p) => !p)}>
              {" "}
              <CloseIcon></CloseIcon>
            </IconButton>
            <Link style={{ textDecoration: "none" }} to="/">
              <div className="m_item">
                <HomeIcon fontSize="large" />

                <h2 className="item">Home</h2>
              </div>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/post">
              <div className="m_item">
                <PostAddIcon fontSize="large" />

                <h2 className="item">Post Furniture</h2>
              </div>
            </Link>

            
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
