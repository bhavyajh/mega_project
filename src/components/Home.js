import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/Home.css";
import SearchIcon from "@mui/icons-material/Search";
import Card from "./Card";
import { useMyDataContext } from "../context/DataContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SortIcon from '@mui/icons-material/Sort';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
//HOME COMPONENT FOR DISPLAYING HOMEPAGE OF APP WHICH CONTAINS CARDS NAVBAR SEARCH AND PAGINATION
const Home = () => {
  const navigate = useNavigate();
  const { card,me } = useMyDataContext();
  console.log(card);
  const [filteredData, setFilteredData] = useState([]);
  const ref = useRef();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  //API CALL FOR DOING PAGINATION FROM BACKEND TO FRONTEND
  useEffect(() => {
    axios.get(`/pagination?page=${page}`).then((res) => {
      setFilteredData(res.data);
    });
  }, [page, setFilteredData,me]);
  useEffect(() => {
    axios.get(`/paginationlength`).then((res) => {
      setCount(res.data);
    });
  }, [me]);
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/signin");
    }
  }, [navigate]);
  useEffect(() => {
    setFilteredData(card.slice());
  }, [card,me]);
 //API CALL FOR DOING SEARCHING FROM BACKEND TO FRONTEND
  const search = () => {
    axios.get(`/searchfurniture?search=${ref.current.value}`).then((res) => {
      setFilteredData(res.data);
    });
  };
 //API CALL FOR DOING SORTING BY PRICE FROM BACKEND TO FRONTEND
  const sort = () => {
    axios.get(`/sortFurniture`).then((res) => {
      setFilteredData(res.data);
    });
  };
  return (
    <div>
    
  
      <div className="search">
    
        <div className="inputContainer">
        
          <SearchIcon className="search_c"></SearchIcon>

          <input
            ref={ref}
            type="text"
            onChange={search}
            className="input"
            placeholder="Search your furniture"
          ></input>
        </div>
       <SortIcon fontSize="large" style={{color:"white", marginLeft:"2rem"}} onClick={sort}></SortIcon>
     
      </div>
      <div className="cards">
        {filteredData &&
          filteredData.map &&
          filteredData.map((val, idx) => <Card key={idx} data={val} />)}
      </div>

      <div className="pagination">
      <div style={{display:"flex",color:"black",width:"fit-content",gap:"0.5rem"}}>
           <p style={{width:"fit-content"}}>Logged in as :{localStorage.getItem("userName")} </p>
           <p>Role : {localStorage.getItem("role")}</p>
           </div>
      <div>
      {page !== 1 && (
          <ArrowBackIosNewIcon
            fontSize="large"
            style={{ color: "#0b6efd" }}
            onClick={() => setPage((p) => p - 1)}
          >
            previous
          </ArrowBackIosNewIcon>
        )}

        {page === 1 && (
          <ArrowBackIosNewIcon
            style={{ opacity: "0.2", color: "#0b6efd" }}
            fontSize="large"
            disabled
          >
            previous
          </ArrowBackIosNewIcon>
        )}
        {count > page * 10 && (
          <ArrowForwardIosIcon
            fontSize="large"
            style={{ color: "#0b6efd" }}
            onClick={() => setPage((p) => p + 1)}
          >
            next
          </ArrowForwardIosIcon>
        )}
        {!(count > page * 10) && (
          <ArrowForwardIosIcon
            style={{ opacity: "0.2", color: "#0b6efd" }}
            fontSize="large"
            disabled={true}
          >
            next
          </ArrowForwardIosIcon>
        )}
      </div>
      <div style={{width:"17rem"}}>
     
      </div>
        
      </div>
      </div>
   
  );
};

export default Home;
