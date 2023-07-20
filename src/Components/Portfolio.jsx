import React from 'react';
import PortrfolioBox from './PortfolioBox'
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';


function Portfolio() {

  return (
    <div id='portfolio'>
      <h1>TEAM MEMBERS</h1>
        <div className='wrapper'>
          <div className='wrapper-track'> 
          <button className='portfolio-button'><PortrfolioBox image={fimage1} title="Characters"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage2} title="Environments"/></button> 
          <button className='portfolio-button'><PortrfolioBox image={fimage3} title="Visual effects"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage4} title="3D models"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage1} title="Characters"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage2} title="Environments"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage3} title="Visual effects"/></button>
          <button className='portfolio-button'><PortrfolioBox image={fimage4} title="3D models"/></button>
          </div>
        </div>  
    </div>
  )
}

export default Portfolio;