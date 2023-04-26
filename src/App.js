import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostFurniture from "./components/PostFurniture";
import Details from "./components/Details";
import HomeOne from "./HomeOne";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React, { Suspense } from "react";
import UpdateFurniture from "./components/UpdateFurnture";

const Navbar=React.lazy(()=>import("./components/Navbar"))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading</h1>}>
      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<HomeOne/>}>     
            </Route>
          <Route path="/" element={<Navbar />}>

          <Route path="/home" index element={<Home/>}>     
            </Route>
            <Route path="/signin" index element={<Login/>}>     
            </Route>
            <Route path="/signup" index element={<SignUp/>}>     
            </Route>
            <Route path="/post" element={<PostFurniture/>}>
        
          </Route>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/update/:id" element={<UpdateFurniture/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
