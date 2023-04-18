import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostFurniture from "./components/PostFurniture";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>

          <Route path="/" index element={<Home/>}>     
            </Route>
            <Route path="/post" element={<PostFurniture/>}>
            



         

          </Route>
          <Route path="/details/:id" element={<Details/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
