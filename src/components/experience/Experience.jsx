import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

 const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Front End Development</h3>
            <div className='experience_content'>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' className='experience_details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
            </div>
        </div>
        <div className='experience_backend'>
        <h3>Back End Development</h3>
            <div className='experience_content'>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Machine Learning</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Data Science</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}
export default Experience