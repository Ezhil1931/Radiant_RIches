import React from 'react'
import { GoChevronDown, GoTrophy } from "react-icons/go"
import image from "./Images/pc.png"
import content from './Data.json'
import { SlStar } from 'react-icons/sl'
import { IoDiamondOutline } from "react-icons/io5"


import "./Styles/Content.css"
import "./Styles/MobileStyle.css"
function Content() {

  let res = content;
  let data = res.content;

  return (
    <div className='content'>

      {data.map((item, id) => (
       
       <div className='card'>
          {/* Image side in card */}
          <div className='image'>
            <p id='best'><span>{item.best === "Best Value" ?<IoDiamondOutline/>:<GoTrophy/>}</span>{item.best}</p>
            <p id='number'>{++id}</p>
            <img src={image} />
            <p>Builder</p>
          </div>
          
          {/* text  in card*/}
          
          <div className='text'>
            <div className='firstTxt'>
              <p><b>{item.title}-</b>{item.para}</p>
            </div>
            <div className='secondTxt'>
              <b>{item.main}</b>
              <p>{item.para2}</p>
            </div>
            <div className='showmore'>
              <p>Show more <span> <GoChevronDown /> </span></p>
            </div>
          </div>

{/* Rating in card*/}
          <div className='ratings'>

            <div className='startRate'>
              <p id='num'>{item.number}</p>
              <h3 id='rate'>{item.rate}</h3>
              <span id='star'><SlStar /><SlStar /><SlStar /><SlStar /><SlStar /></span>
            </div>
            <button className='view'>view</button>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Content