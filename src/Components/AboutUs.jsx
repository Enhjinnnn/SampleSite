import React from 'react';
import videoAbout from '../img/AboutUs.mp4';

function AboutUs() {
  return (
    <div id='about'>
        <div className='about-image'>
            <video 
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop src={videoAbout}>
            </video>
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