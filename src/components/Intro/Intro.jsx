import React, { useContext } from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import glassesimoji from "../../img/glassesimoji.png"
import Crown from "../../img/crown.png"
import FloattingDiv from '../FloattingDiv/FloattingDiv'
import { themeContext } from "../../Context"
import { motion } from "framer-motion"

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  // animation
  const transiton = { duration : 2, type: 'spring'}
  return (
   <div className="intro">
    <div className="i-left">
     <div className="i-name">
      <span style ={{color: darkMode ?'white' : ''}}>Hy! I Am</span>
      <span>Taheny Belguith</span>
      <span>Full stack Developer with high level and development, producting the quality work</span>
     </div>
     <button className="button i-button">Hire me</button>
     <div className="i-icons">
      <a href="https://github.com/TahenyBELGUITH">
       <img src={ Github } />
      </a>

      <a href="https://www.linkedin.com/in/belguith-taheny/">
       <img src={ LinkedIn } />
      </a>

      <a href="https://www.instagram.com/belguith_tahenyy/">
       <img src={ Instagram } />
      </a>
    </div>

    </div> 
    <div className="i-right">
       <img src={ Vector1 } />
       <img src={ Vector2 } />
        <img src={boy} />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition = {transiton}
          src={glassesimoji}></motion.img>
        <motion.div
          initial={{ left: '74%' , top: '-4%' }}
          whileInView={{ left: '68%' }}
          transition = {transiton}
          
          style={{ top: '-4%', left: '68%' }}>
      <FloattingDiv image={Crown} text1='Web' text2= 'Developer' />
     </motion.div>
     
        <motion.div
           initial={{ top: "19rem" , left: '-10rem' }}
          whileInView={{ left: '1rem' }}
          transition = {transiton}
          
          style={{ top: '18rem', left: '0.9rem' }}>
      <FloattingDiv image={thumbup} text1='Best Graphic ' text2= 'Designer Award 2k22' />
      </motion.div>
        
        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>

        <div className="blur" style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
        left: '-9rem'}}></div>
        
    </div>
   </div>
  )
}

export default Intro