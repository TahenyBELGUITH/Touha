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
   review: "Taheny is Great either in person or in technical aspects, she is someone who can not rest until she pushes all boundaries and get the desired outcomes, I was touched by how she demonstrated her ability to grasp a new concept in a such short period of time. personally, I would like to work with Taheny as frequently as possible, because when I am working with her I feel confident to tackle any challenge. I can not recommend her enough."
  },
  {
   img: profilePic2,
   review: "During my time at Microverse, Taheny and I have met on a couple of occasions and have worked together on a group project. Throughout all that time, I have always enjoyed working and interacting with her.Taheny is a dedicated person, who will make sure that every task is carried out professionally and that everybody in the team is involved and engaged. She is also someone who loves to build good relationships with her teammates and make the most out of her time.If you are looking for a smart, professional, dedicated, and yet affable software developer, she is your person!"
  },
  {
   img: profilePic3,
   review: "We meet many people every day but only some leave a mark. One of them is Taheny. She was my partner at Microverse for a block during the second module. I was more than impressed by Taheny’s technical ability to craft efficient solutions to the problems we faced. This natural skill helped me grow as a developer since she facilitated the growth of my ability to think outside the box. I surely did enjoy my time working with Taheny and look forward to collaborating again. Taheny will be a valuable asset to any company."
  },
  {
   img: profilePic4,
   review: "Taheny has passion for web development. She likes exploring and learning things at her own pace. She is open-minded and has a good eye for styling her projects. She knows when to reach out for help and listen attentively to others.She acts professionally and is a good team player. I'm sure she will be able to handle any projects assigned to her because she is determined to excel in the tech industry."
  },
  {
   img: profilePic5,
   review: "Taheny is very intelligent and very qualified. She's talented and she keeps always her motivation up. Her personality is full of kindness and enthousiam. Good luck for your professional career ! "
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