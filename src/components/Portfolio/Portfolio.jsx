import React, {useContext} from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide}  from "swiper/react"
import Sidebar from  "../../img/sidebar.png"
import Ecommerce from  "../../img/ecommerce.png"
import HOC from  "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Math from  "../../img/math.png"
import "swiper/css"
import { themeContext } from "../../Context"


function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

 return (
  <div className="portfolio" id="portfolio">
   {/* heading */}
     <span
       style={{ color: darkMode ? 'white' : '' }}
     >Recent Projects</span>
   <span>Portfolio</span>

   {/* slider */}
   <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className= "portfolio-slider"
   >
       <SwiperSlide>
         <a href='https://conference-page.vercel.app/'>
     <img src ={Sidebar}></img></a>
       </SwiperSlide>
       
       <SwiperSlide>
         <a href='https://prismatic-lokum-46fd79.netlify.app/'>
     <img src ={Ecommerce}></img></a>
     </SwiperSlide>
    
       <SwiperSlide>
         <a href='https://to-dos-list-react-cp99.vercel.app/'>
     <img src ={HOC}></img></a>
     </SwiperSlide>

       <SwiperSlide>
          <a href='https://tahenybelguith.github.io/CRUD/'>
     <img src ={MusicApp}></img></a>
       </SwiperSlide>
       
       <SwiperSlide>
          <a href='https://calculator-84ha.vercel.app/calculator'>
     <img src ={Math}></img></a>
    </SwiperSlide>
    
   </Swiper>
   </div>
  )
}

export default Portfolio