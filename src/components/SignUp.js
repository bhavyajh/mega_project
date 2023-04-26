import React, { useState } from "react";
// import axios from 'axios';
import "../styles/Signup.css";
import { flexcontainer } from "bhu-ui";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate=useNavigate();
  const [type,setType]=useState("");
  const [registerFormData, setRegisterFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(registerFormData.Password===registerFormData.ConfirmPassword){
    

    axios
      .post("/api/Authentication/register", {
        UserName: registerFormData.UserName,
        Password: registerFormData.Password,
      }).then(()=>{
        axios.post(`/api/Authentication/roletouser/${registerFormData.UserName}/${type}`).then(()=>{
          alert("user assigned to role")
        }).catch((err)=>{
          alert(err.message)
        })
      })

      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.message);
      });
    // }
  };
 
}


  return (
    <div style={flexcontainer}>
      <div className="box_login">
        <form className="box_signup" onSubmit={handleSubmit}>
          <h3 style={{ alignItems: "center", textAlign: "center" }}> SignUp</h3>
          <label>
            Name:
            <input
              type="text"
              value={registerFormData.UserName}
              onChange={(e) => setRegisterFormData({...registerFormData,UserName:e.target.value})}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={registerFormData.Email}
              onChange={(e) => setRegisterFormData({...registerFormData,Email:e.target.value})}
              required
           />
          </label>
          <label >User
            <select onChange={e=>setType(e.target.value)} >Select what kind of user u want to be
              <option>select the Type</option>
            <option value={"customer"}>customer</option>
              <option value={"seller"}>seller</option>
            
            </select>
          </label>
          <label>
            Password:
            <input
              type="password"
              value={registerFormData.Password}
              onChange={(e) => setRegisterFormData({...registerFormData,Password:e.target.value})}
              required
           />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={registerFormData.ConfirmPassword}
              onChange={(e) => setRegisterFormData({...registerFormData,ConfirmPassword:e.target.value})}
              required
            />
          </label>
          {/* <Link style={{ textDecoration: "none" }} to="/signin"> */}
            <button >Sign Up</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
