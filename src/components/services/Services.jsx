import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>experience</h5>
      <h2>More In Depth</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Software Engineering</h3>
          </div>

          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Java</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Python</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Javascript </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>x86 Assembly </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Vs Code </p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Offensive Security</h3>
          </div>

          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Nmap </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Wireshark </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Metasploit </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>John the Ripper </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Kali Linux</p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Machine Learning</h3>
          </div>

          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>C++</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Python</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Numpy </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Keras</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Classification </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services