import React from 'react'
import './testmonials.css'
import AVTR1 from '../../img/brr.jpg'
import AVTR2 from '../../img/brr.jpg'
import AVTR3 from '../../img/brr.jpg'
import AVTR4 from '../../img/brr.jpg'
// import Swiper core and required modules
import { Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
{
  avatar: AVTR1,
  name: 'John Doe',
  review: 'Figma charts library with 40+ full-width charts templates served in light dark themes.'

},
{
  avatar: AVTR2,
  name: 'John Doe',
  review: 'Figma charts library with 40+ full-width charts templates served in light dark themes.'

},
{
  avatar: AVTR3,
  name: 'John Doe',
  review: 'Figma charts library with 40+ full-width charts templates served in light dark themes.'

},
{
  avatar: AVTR4,
  name: 'John Doe',
  review: 'Figma charts library with 40+ full-width charts templates served in light dark themes.'

},

]
const Testmonials = () => {
  return (
    <section id='testimonials'>
    <br>
    </br>
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <Swiper className='container testimonials_container'
       modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                    <img src={avatar}/>
                </div>
                <h5 className='client_name'>
                    {name}
                </h5>
                <small className='client_review'>
                    {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testmonials