import React from 'react'
import "./Card.css"

function Card({emoji, heading, detail}) {
 return (
  <div className="card">
   <img src={emoji}></img>
   <span>{heading}</span>
       <span>{detail}</span>
       <a href='#contact'>
   <button className='c-button'>
    Like it ?
   </button></a>
  </div>
   )
}

export default Card