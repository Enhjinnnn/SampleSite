import React from 'react';
import Projectsbox from './Projectsbox';
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';

function Projects() {
  return (
    <div id='features'>
        <h1>PROJECTS</h1>
        <div className='a-container'>
            <Projectsbox image={fimage1} title="Characters"/>
            <Projectsbox image={fimage2} title="Environments"/>
            <Projectsbox image={fimage3} title="Visual effects"/>
            <Projectsbox image={fimage4} title="3D models"/>
        </div>
    </div>
  )
}

export default Projects;