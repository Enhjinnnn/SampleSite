import React from 'react';
import aboutImg from '../img/about.png';

function AboutUs() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutImg} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p> LEARN MORE ABOUT US</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default AboutUs;