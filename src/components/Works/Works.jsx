import React, { useContext } from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from "../../Context"
import { motion } from "framer-motion";




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
        <span>I’d be happy to help you find a solution! </span>
        <a href='#contact'>
      <button className='button s-button'>Hire me </button></a>
     <div className="blur s-blur1" style={{
          background: '#ABF1FF94'}}></div>
    </div>
    {/* right side */}
    <div className="w-right">
        <motion.div
           initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}          
          className="w-mainCircle">
          
      <div className="w-secCircle">
       <img src= {Upwork}></img>
      </div>

      <div className="w-secCircle">
       <img src= {Fiverr} className ="fiverjci"></img>
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


     </motion.div>
    </div>
    </div>
  )
}

export default Works