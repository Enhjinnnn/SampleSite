import React from 'react';
import Projectsbox from './Projectsbox';
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';
import { Redirect } from 'react-router-dom';




function Projects() {
 
  return (
    <div id='features'>
        <h1>PROJECTS</h1>
        <div className='a-container'>
            <button className='features-button' onClick={() => <Redirect to="/project"/> }><Projectsbox image={fimage1} title="Characters"/></button> 
            <button className='features-button'><Projectsbox image={fimage2} title="Environments"/></button>
            <button className='features-button'><Projectsbox image={fimage3} title="Visual effects"/></button>
            <button className='features-button'><Projectsbox image={fimage4} title="3D models"/></button>

        </div>
    </div>
  )

}

export default Projects;