import React from 'react'
import './portfolio.css'
import IMG1 from '../../img/kk.jpg'
import IMG2 from '../../img/sac.jpg'
import IMG3 from '../../img/sac.jpg'
import IMG4 from '../../img/sac.jpg'
import IMG5 from '../../img/rr.jpg'
import IMG6 from '../../img/wd.jpg'
/*
const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Blockchain Tech",
    github:"google.com",
    demo: 'https://dribbble.com/shots/16433958-Cryptowall-Cryptocurrency-Dashboard?utm_source=Clipboard_Shot&utm_campaign=aweka&utm_content=Cryptowall%20-%20Cryptocurrency%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aweka&utm_content=Cryptowall%20-%20Cryptocurrency%20Dashboard&utm_medium=Social_Share'
  }
]
*/

const Portfolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <div className='container portifolio_container'>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            <img src={IMG1} alt=''/>
          </div>
            <h3>This is a Portifolio item title</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio