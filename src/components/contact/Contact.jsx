import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



 const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5mfijbq', 'template_fmy3mnc', form.current, '9hNQ3xn6wTTBRrEGs')
      e.target.reset()
  };

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Sdiriba33@gmail.com</h5>
            <a href='mailto:Sdiriba33@gmail.com'>
                Send a message.
            </a>
          </article>
          
          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Seran Gemechu</h5>
            <a href='linkedin.com/profile' target='_blank'>
                Contact Me
            </a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Mobile</h4>
            <h5>888-888-8888</h5>
            <a href='linkedin.com/profile' target='_blank'>
                Text
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

