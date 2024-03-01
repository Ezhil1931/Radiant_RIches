import React from 'react'
import "./Styles/Navbar.css"
import "./Styles/MobileStyle.css"

import {FiSearch } from "react-icons/fi"

function NavBar() {
  return (
    <div className='navbar'>
    <div className='input'>
      <button><FiSearch/></button>
      <input type='text'/>
    </div>
    <ul className='menu'>
    <li>Categories</li>
    <li>Webite Buliders</li>
    <li>Today's deals</li>
    </ul> 
        </div>
  )
}

export default NavBar