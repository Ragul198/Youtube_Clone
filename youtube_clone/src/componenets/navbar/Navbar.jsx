import React from 'react'
import './navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import more from '../../assets/more.png'
import profile from '../../assets/tom.png'
const Navbar = ({setsidebar}) => {
  return (
    <div className="Navbar ">
      <div className="navrbar-left flex_div">
        <img src={menu} alt="menu" className='menu' onClick={() => setsidebar(prev=>prev===false?true:false)} />
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className="navbar-middle flex_div">
        <input type="text" placeholder='Search' />
        <img src={search} alt="" />
      </div>
      <div className="navbar-righ flex_div">
      <div className="icon">
      <img src={upload} alt="" />
      <img src={more} alt="" />
      <img src={notification} alt="" />
      </div>
      <img src={profile} alt="" className='profile' />
      
      </div>
    </div>
  )
}

export default Navbar