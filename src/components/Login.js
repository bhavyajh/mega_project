import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "./axios";

import { flexcontainer } from "bhu-ui";
import "../styles/Login.css";
import { useMyDataContext } from "../context/DataContext";

const Login = () => {
  const navigate=useNavigate();
  const {setUser,setRole}=useMyDataContext()
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")){
       navigate("/home")
    }
  },[navigate])

const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post("/api/Authentication/login",{
    UserName:username,
    Password:password
  }).then(()=>{
    setUser(username)
  }).then(()=>{
     localStorage.setItem("userName",username)
     
  }).then(()=>{
    axios.get(`/api/Authentication/finduserroles/${username}`).then((r)=>{
setRole(r.data[0]);
localStorage.setItem("role",r.data[0]);
    })
  }).then(()=>{
    localStorage.setItem("isLoggedIn",true)
  }).then(()=>{
    navigate("/home")
  }).catch((err)=>{
    alert(err.message)
  })
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
     <div style={flexcontainer}>
          <div className='box_login'>
          <h3 style={{alignItems:"center",textAlign:"center"}}> Login</h3>
         <label>Enter username</label>
         <input value={username} onChange={(e)=>setUserName(e.target.value)} type='text' required></input>
         <label>Enter Password</label>
         <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' required></input>
        <button> Log In</button>
        <p style={{textAlign:"center"}}>Not logged in ? <Link to="/signup">Create Account Here</Link></p>
      </div>
      </div>
 </form>
</div>
);

};

export default Login;
