import React, { useRef, useState, useContext }  from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context"



function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e1vbcnp', 'template_v6spw9w', form.current, 'f2F8PmDNBZRa2pl56')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

 return (
  <div className="contact-form" id="contact">
   <div className="w-left">
    <div className="awesome">
         <span
         style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
     <span>Contact me</span>
     <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
    </div>
   </div>

   <div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
     <input type="text" name="user_name" className="user" placeholder="Name" />
     
     <input type="email" name="user_email" className="user" placeholder="Email" />
     
     <input name="message" className="user" placeholder="Message" />

     <input type="submit" className="button" value ="send" />
      
         <span>{ done && "Thanks for contacting me!" }</span>

     <div className="blur c-blur1" style={{ background: "var(--purple" }}></div>
     

    </form>
   </div>
  </div>
  )
}

export default Contact