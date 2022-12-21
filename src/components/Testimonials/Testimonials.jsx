import React from 'react'
import ShowMoreText from "react-show-more-text";

import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import profilePic5 from "../../img/profile5.jpg"
import profilePic6 from "../../img/profile6.jpg"
import {Pagination} from "swiper"
import "swiper/css/pagination"
import "swiper/css"

function Testimonials() {

 const clients = [
  {
   img: profilePic1,
   review: "Taheny is Great either in person or in technical aspects, she is someone who can not rest until she pushes all boundaries."
  },
  {
   img: profilePic2,
   review: "During my time at Microverse, Taheny and I have met on a couple of occasions and have worked together on a group project."
  },
  {
   img: profilePic3,
   review: "We meet many people every day but only some leave a mark. One of them is Taheny. She was my partner at Microverse."
  },
  {
   img: profilePic4,
   review: "Taheny has passion for web development. She likes exploring and learning things at her own pace."
  },
  {
   img: profilePic5,
   review: "Taheny is very intelligent and very qualified. She's talented and she keeps always her motivation up. "
  },
  {
   img: profilePic6,
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
  }

 ]

  return (
   <div className="t-wrapper" id="testimonials">
    <div className="t-heading">
     <span>Clients always get </span>
     <span>Exceptional Work</span>
     <span> from me .... </span>

     <div className="blur t-blur1" style={{
      background: "var(--purple)"
     }}></div>
     
     <div className="blur t-blur2" style={{
          background: "skyblue"}}></div>
    
     
    </div>

    {/* slider */}
    <Swiper
     modules={[Pagination]}
     slidesPerView={1}
     pagination={{clickable: true}}
    >
     {clients.map((client, index)=> {
      return (
       <SwiperSlide key={index}>
        <div className="testimonial">
           <img src={client.img}></img>
           <span>{client.review}</span>
        </div>
       </SwiperSlide>
        )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials