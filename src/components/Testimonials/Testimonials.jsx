import React from 'react'
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
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
  },
  {
   img: profilePic2,
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
  },
  {
   img: profilePic3,
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
  },
  {
   img: profilePic4,
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
  },
  {
   img: profilePic5,
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nam vel aperiam ullam ea perferendis qui temporibus tempore, dolores omnis eveniet. Necessitatibus, amet voluptate quos obcaecati harum veritatis aperiam."
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