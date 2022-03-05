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
              <small>- IT</small> <br></br>
              <small>- Software Engineering</small><br></br>
              <small>- Cyber Security</small><br></br>
              <small>- Machine Learning</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>I like:</h5>
              <small>- Soccer</small> <br></br>
              <small>- Reading</small> <br></br>
              <small>- Programming</small><br></br>
              <small>- Golden Retrievers</small> 
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Career Status</h5>
              <small>- Actively looking for opportunities.</small>
            </article>
          </div>

          <p>
              4th year Computer Science student at California State University,
              Sacramento. I'm fascinated by computing and always looking for
              ways to learn, improve and expand my technical skills.
              I'm excited by new opportunities and particularly interested in Cyber Security, 
              Software Engineering, and Artificial Intelligence.
          </p>

         
          <a href='#contact' className='btn btn-secondary'  > Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About