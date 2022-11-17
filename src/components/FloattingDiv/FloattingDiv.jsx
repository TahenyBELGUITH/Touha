import React from 'react'
import "./FloattingDiv.css"
function FloattingDiv({image, text1, text2}) {
  return (
   <div className="floattingdiv">
    <img src={ image } />
    <span>
     {text1}<br/>
      {text2}
    </span>
    </div>
   )
}

export default FloattingDiv