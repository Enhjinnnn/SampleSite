import React from 'react';
import Projectsbox from './Projectsbox';
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';
import { useNavigate} from 'react-router-dom';


function Portfolio() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div id='portfolio'>
      <h1>PORTFOLIOS</h1>
        <div className='wrapper'>
        <button className='features-button' onClick={() => handleButtonClick('/characters')}>
          <Projectsbox image={fimage1} title="Characters"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/environments')}>
          <Projectsbox image={fimage2} title="Environments"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/visual-effects')}>
          <Projectsbox image={fimage3} title="Visual effects"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/3d-models')}>
          <Projectsbox image={fimage4} title="3D models"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/characters')}>
          <Projectsbox image={fimage1} title="Characters"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/environments')}>
          <Projectsbox image={fimage2} title="Environments"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/visual-effects')}>
          <Projectsbox image={fimage3} title="Visual effects"/>
        </button>
        <button className='features-button' onClick={() => handleButtonClick('/3d-models')}>
          <Projectsbox image={fimage4} title="3D models"/>
        </button>
      </div>
    </div>
  )
}

export default Portfolio;