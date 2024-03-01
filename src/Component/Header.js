import React from 'react'
import "./Styles/Header.css"
import "./Styles/MobileStyle.css"
import { BsExclamationCircle } from "react-icons/bs"
import { CgCheckO } from "react-icons/cg"
import { MdNavigateNext } from "react-icons/md"


function Header({ headTitle, host ,hdMenu}) {


  const len = host.length;


  return (
    <div className='header'>
      <div className='hdTitle'>
        <h1>{headTitle}</h1>
      </div>

      <div className='hdBar'>
        <ul className='hdList'>
          <li><span><CgCheckO /></span> LastUpdated - February 22,2020</li>
          <li><span><BsExclamationCircle /></span> Advertising Disclosure</li>

        </ul>
        <div className='hdOption'>
          <select>
            <option>Top Relevant</option>
            <option>Newly Added</option>
          </select>
        </div></div>
      <ul className='hdMenu'>
        {hdMenu.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
      
      <ul className='hdNav'>
        {host.map((item, id) => (

          <li>{item} {id !== len - 1 ? <span><MdNavigateNext /></span> : <></>}</li>
        ))}
      </ul>

    </div>
  )
}

export default Header;