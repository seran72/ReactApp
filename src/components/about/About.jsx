import React from 'react'
import './about.css'
import ME from '../../img/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me-img'>
        <img src={ME} alt='About Image' />

        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years in the Cyber Sec industry</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ Clients world wide.</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>100+ completed personal projects.</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae 
          elementum curabitur vitae nunc. Lorem ipsum dolor sit amet consectetur. Molestie 
          a iaculis at erat pellentesque adipiscing tempor commodo.
          </p>

          <a href='#contact' className='btn btn-primary'  > Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About