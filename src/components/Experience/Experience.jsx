import React, { useContext } from 'react'
import "./Experience.css"
import { themeContext } from "../../Context"



function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div className="experience">
    <div className="achievement">
     <div className="circle" style={{ color: darkMode ? 'black' : '' }}>4+</div>
     <span>years</span>
     <span>Experience</span>
    </div>


    {/* 2nd achievement */}

   <div className="achievement">
     <div className="circle" style={{ color: darkMode ? 'black' : '' }}>20+</div>
     <span>completed</span>
     <span>Projects</span>
   </div>

    {/* 3rd achievement */}
    
   <div className="achievement">
     <div className="circle" style={{ color: darkMode ? 'black' : '' }}>3+</div>
     <span>companies</span>
     <span>Work</span>
   </div>

    </div>
  )
}

export default Experience