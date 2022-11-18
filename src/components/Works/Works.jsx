import React, { useContext } from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from "../../Context"




function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div className="work">
    
    {/* left side */}
    <div className="awesome">
        <span
        style={{ color: darkMode ? 'white' : '' }} >Works for All these </span>
     <span>Brands & Clients</span>
     <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Reiciendis dolorum praesentium.<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>
      <button className='button s-button'>Hire me </button>
     <div className="blur s-blur1" style={{
          background: '#ABF1FF94'}}></div>
    </div>
    {/* right side */}
    <div className="w-right">
     <div className="w-mainCircle">
      <div className="w-secCircle">
       <img src= {Upwork}></img>
      </div>

      <div className="w-secCircle">
       <img src= {Fiverr}></img>
      </div>

      <div className="w-secCircle">
       <img src= {Amazon}></img>
      </div>

      <div className="w-secCircle">
       <img src= {Shopify}></img>
      </div>

      <div className="w-secCircle">
       <img src= {Facebook}></img>
      </div>

      {/* background circles */}

      <div className="w-backCircle blueCircle"></div>

      <div className="w-backCircle yellowCircle"></div>


     </div>
    </div>
    </div>
  )
}

export default Works