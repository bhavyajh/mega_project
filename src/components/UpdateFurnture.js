import React, {  useEffect, useState } from "react";
import "../styles/PostFurniture.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import defaultimage from "../image/noimg.png";
import axios from "./axios";
import { Link } from "@mui/material";
import { useMyDataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

const  UpdateFurniture = () => {

    const {id}=useParams()
  const [name, setName] = useState("");
  const [type, setType] = useState("");
const navigate=useNavigate()
useEffect(()=>{
 let role= localStorage.getItem("role")
  if(role!=="seller"){
navigate("/home")
  }
})

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState(() => ({
    imageName: "",

    imageSrc: defaultimage,

    imageFile: null,
  }));

  const [img2, setImg2] = useState(() => ({
    imageName: "",

    imageSrc: defaultimage,

    imageFile: null,
  }));

  const [img3, setImg3] = useState(() => ({
    imageName: "",

    imageSrc: defaultimage,

    imageFile: null,
  }));

  const [img4, setImg4] = useState(() => ({
    imageName: "",

    imageSrc: defaultimage,

    imageFile: null,
  }));

  const showimage1 = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (x) => {
        setImg1({
          ...img1,

          imageFile: imageFile,

          imageSrc: x.target.result,
        });
      };

      reader.readAsDataURL(imageFile);
    } else {
      setImg1({
        ...img1,

        imageFile: null,

        imageSrc: defaultimage,
      });
    }
  };
  const showimage2 = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (x) => {
        setImg2({
          ...img2,

          imageFile: imageFile,

          imageSrc: x.target.result,
        });
      };

      reader.readAsDataURL(imageFile);
    } else {
      setImg2({
        ...img2,

        imageFile: null,

        imageSrc: defaultimage,
      });
    }
  };
  const showimage3 = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (x) => {
        setImg3({
          ...img3,

          imageFile: imageFile,

          imageSrc: x.target.result,
        });
      };

      reader.readAsDataURL(imageFile);
    } else {
      setImg3({
        ...img3,

        imageFile: null,

        imageSrc: defaultimage,
      });
    }
  };
  const showimage4 = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (x) => {
        setImg4({
          ...img4,

          imageFile: imageFile,

          imageSrc: x.target.result,
        });
      };

      reader.readAsDataURL(imageFile);
    } else {
      setImg4({
        ...img4,

        imageFile: null,

        imageSrc: defaultimage,
      });
    }
  };

  const post = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("Name", name);
    form.append("FurnitureType", type);
    form.append("Description", description);
    form.append("Price", price);
    form.append("ImgFile1", "bhavya1");
    form.append("ImgFile2", "bhavya2");
    form.append("ImgFile3", "bhavya3");
    form.append("ImgFile4", "bhavya4");
    form.append("FurnitureImg1File", img1.imageFile);
    form.append("FurnitureImg2File", img2.imageFile);
    form.append("FurnitureImg3File", img3.imageFile);
    form.append("FurnitureImg4File", img4.imageFile);

    axios
      .put(`/api/Furniture/${id}`, form)
      .then(() => {
        alert("done");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="postContainer">
        <form onSubmit={post} className="form">
          <h1>update furniture</h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name of furniture"
            type="text"
            required
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option> select furniture type</option>
            <option value="Chair">Chair</option>
            <option value="Dining Table">Dining Table</option>
            <option value="Study Table">Study Table</option>
            <option value="Bed">Bed</option>
            <option value="Sofa">Sofa</option>
          </select>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the Description"
            required
          ></textarea>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price in rupees"
            type="number"
            required
          />
          <label htmlFor="img1">
            Image 1:
            <AddPhotoAlternateIcon />
          </label>

          <input
            className="img"
            id="img1"
            onChange={showimage1}
            type="file"
            accept="image/*"
            required
          />
          <label htmlFor="img2">
            Image 2:
            <AddPhotoAlternateIcon />
          </label>
          <input
            className="img"
            id="img2"
            onChange={showimage2}
            type="file"
            accept="image/*"
            required
          />
          <label htmlFor="img3">
            Image 3:
            <AddPhotoAlternateIcon />
          </label>
          <input
            className="img"
            id="img3"
            onChange={showimage3}
            type="file"
            accept="image/*"
            required
          />
          <label htmlFor="img4">
            Image 4:
            <AddPhotoAlternateIcon />
          </label>
          <input
            className="img"
            id="img4"
            onChange={showimage4}
            type="file"
            accept="image/*"
            required
          />

          <Link to="/">
            <button className="btn_pos">Update it!!</button>
          </Link>
        </form>

        <div>
          <img width="200" height="200" src={img1.imageSrc} alt="" />
          <img width="200" height="200" src={img2.imageSrc} alt="" />
          <img width="200" height="200" src={img3.imageSrc} alt="" />
          <img width="200" height="200" src={img4.imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpdateFurniture;
