import React, { useContext } from 'react'
import "./FloattingDiv.css"
import { themeContext } from "../../Context"


function FloattingDiv({ image, text1, text2 }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="floattingdiv"
      style={{ color: darkMode ? 'black' : '' }}>
    <img src={ image } />
    <span>
     {text1}<br/>
      {text2}
    </span>
    </div>
   )
}

export default FloattingDiv