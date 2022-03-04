import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Seran</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portifolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='facebook.com'><FaFacebookF/></a>
        <a href='facebook.com'><FiInstagram/></a>
        <a href='facebook.com'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; CrisprG Inc. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer