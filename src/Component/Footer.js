import React from 'react'
import "./Styles/Footer.css"

function Footer() {
  const list1=["Categories","WebHosting","Hosting","Data Center","Robotics-Automation"]

    const list2=["Contact","Privacy Policy","Terms of Service","Categories","About"]
  

const country=["United States","India","Australia","Europe","Japan","Germany"]

  
    return (
    <div className='footer'>

        <div className='email'>
<p>Sign up and get exclusive <br/>special deals </p>

<div className='ftinput'>
<input type='text'/>
<button>Sign Up</button>
</div>
        </div>

        <div className='mainfooter'>
            <div className='foot'>
            <ul className='footlist1'>
               
             {list1.map((item)=>(
<li>{item}</li>
             ))}
            </ul>
        
        <ul className='footlist2'>
{list2.map((item)=>(
    <li>{item}</li>
))}
        </ul>
        
        <div className='footOption'>
            <select>
                {country.map((item)=>(
                    <option>{item}</option>
                ))}
            </select>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer