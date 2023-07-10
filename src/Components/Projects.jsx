import React from 'react';
import Projectsbox from './Projectsbox';
import fimage1 from '../img/1.svg';
import fimage2 from '../img/2.svg';
import fimage3 from '../img/3.svg';
import fimage4 from '../img/4.svg';

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