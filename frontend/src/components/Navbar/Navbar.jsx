import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { token ,setToken ,update,currentUser} = useContext(StoreContext);
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem('user'));
  // let url='/profile'
  // if(user.isAdmin)  url='/admin'
  // console.log(url);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    update(null)
    setToken("");
    navigate('/')
  }

  const goToProfile=async ()=>
  {
    try {
      console.log(currentUser);
      const res=await axios.get(`http://localhost:9000/api/user/${currentUser._id}`,{ headers: {token}});
      console.log(res);
      if( res.data.admin) navigate('/admin');
      else navigate('./profile')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          {/* <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div> */}
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={goToProfile}> <img src={assets.bag_icon} alt="" /> <p>Profile</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
