import { Link } from 'react-router-dom'
import "../src/styles/HomeOne.css"
import Login from './components/Login'


const HomeOne = () => {
  return (
    <div className='main_landing'>
      <div className='submain'>
        <h1 className='title'>Welcome to F-cart</h1>
        <div className='vivu'>
          <Link to="/signin"><button className='post_fur'>Sign In</button></Link>
          <Link to="/signup"><button className='shop_fur'>Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeOne