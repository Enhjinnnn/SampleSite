import React from 'react';
import { useNavigate} from 'react-router-dom';
import Projectsbox from './Projectsbox';
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';


function Projects() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div id='features'>
      <h1>PROJECTS</h1>
      <div className='a-container'>
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
  
  );
}

export default Projects;
  