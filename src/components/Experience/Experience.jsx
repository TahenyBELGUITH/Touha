import React from 'react'
import "./Experience.css"


function Experience() {
  return (
   <div className="experience">
    <div className="achievement">
     <div className="circle">4+</div>
     <span>years</span>
     <span>Experience</span>
    </div>


    {/* 2nd achievement */}

   <div className="achievement">
     <div className="circle">20+</div>
     <span>completed</span>
     <span>Projects</span>
   </div>

    {/* 3rd achievement */}
    
   <div className="achievement">
     <div className="circle">3+</div>
     <span>companies</span>
     <span>Work</span>
   </div>

    </div>
  )
}

export default Experience