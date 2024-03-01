import React from 'react'
import "./Styles/Deals.css"
import "./Styles/MobileStyle.css"
import image from "./Images/pc.png"
import deals from "./Data.json"

function Relateddeals() {

    let response = deals;
let   data=response.deals;

    return (
        <div className='container'>
        <div className='deals'>
            {data.map((item,id) => (

                <div className='dealcard' key={id}>
                    <div className='img'>
                    <img src={image} />
                    </div>
                    <ul className='offer'>
                        <li>{item.offer}</li>
                        <li>{item.time}</li>
                    </ul>
                    <div className='dlTitle'>
                        <b>{item.title}</b><p>{item.para}</p>
                    </div>
                    <ul className='price'>
                        <li>{item.price}</li>
                        <li>{item.oldprice}</li>
                        <li>{item.offerpercentage}</li>
                    </ul>
                    <button className='dlView'>ViewDeal</button>
                </div>
            ))}
            </div>


        </div>
    )
}



export default Relateddeals