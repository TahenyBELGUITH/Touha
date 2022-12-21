import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"
import { themeContext } from "../../Context"
import { motion } from "framer-motion"



function Services() {

  const transition = { duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services" id="services">
    {/* left side */}
    <div className="awesome">
        <span
          style={{ color: darkMode ? 'white' : '' }}
        >My Awesome</span>
     <span>services</span>
     <span>Find the best awesome services you need<br/> to help you successfully meet your project <br/>planning goals and deadline. </span>
     <a href= { Resume } download>
      <button className='button s-button'>Download CV</button>
      </a>

     <div className="blur s-blur1" style={{
          background: '#ABF1FF94'}}></div>
        
    </div>
    {/* right side */}

    <div className="cards">
        <motion.div
          whileInView={{ left: "19rem" }}
          initial = {{ left: "25%" }}
          transition = {transition}
          
          style={{ left: '14rem' }}>
      <Card
       emoji={HeartEmoji}
       heading={'Design'}
       detail = {"Figma, Sketch, Photoshop, Illustrator, Adobe"}
      />
     </motion.div>
     {/* second card */}
        <motion.div
           initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}

          
          style={{ top: "12rem", left: "-4rem" }}>
       <Card
       emoji={Glasses}
       heading={'Developer'}
       detail = {"HTML, CSS, JS, REACT, Ruby, Git, PostgreSQL, SQL, Jest, Capybara, RSpec"}
      />
     </motion.div>


     {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}

          style={{ top: "19rem", left: "12rem" }}>
       <Card
       emoji={Humble}
       heading={'JCI member'}
       detail = {"IT consultant"}
      />
     </motion.div>
     <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>

    </div>
    </div>
   
  )
}

export default Services