import { Link } from 'react-router-dom'
import "../src/styles/HomeOne.css"


const HomeOne = () => {
  return (
    <div className='main_landing'>
      <div className='submain'>
        <h1 className='title'>Welcome to F-cart</h1>
        <div className='vivu'>
          <Link to="/post"><button className='post_fur'>Post Furniture</button></Link>
          <Link to="/home"><button className='shop_fur'>Shop Furniture</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeOne