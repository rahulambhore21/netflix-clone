import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.png'
import profile from  '../../assets/profile_img.png'
import search from  '../../assets/search_icon.svg'
import bell from  '../../assets/bell_icon.svg'
import caret from  '../../assets/caret_icon.svg'
import { ToastContainer, toast } from 'react-toastify';
import {logout} from '../../firebase.js'
function Navbar() {

  const navRef = useRef();
  useEffect(() => {
   window.addEventListener('scroll',()=>{
    if(window.scrollY >=80){
      navRef.current.classList.add('nav-black');
    }
    else{
      navRef.current.classList.remove('nav-black');
    }
   })
  },[]);
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Entertainement</li>
          <li>WatchList</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icon'/>
        <p>Children</p>
        <img src={bell} alt="" className='icon'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <img src={caret} alt="" />
          <div className="dropdown">
          <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar