import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fidj3yt', 'template_4lthdwd', form.current, '0JEIX6mElWQ-gb978')
      .then((result) => {
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };
     return <div className="contact">
          <Header/>
          <div className="start">
            <h1 id="hit">Contact.</h1>
            <p id="go">Get in touch or shoot me an email directly on <span>hmahamed035@gmail.com</span></p>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Name"/>
              <input type="email" name="user_email" placeholder="Email" />
              <textarea name="message" placeholder="Message"/>
              <input type="submit" value="Send" />
             </form>
            <Link to="/home" className="homey"> Go Back Home </Link> 
          </div>
          <Footer />
</div>
}