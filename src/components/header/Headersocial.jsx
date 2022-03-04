
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


 const Headersocial = () => {
  return (
    <div className='header_socials'>
            <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
            <a href='https://github.com' target="_blank"><FaGithub/></a>
            <a href='https://Dribble.com' target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default Headersocial
