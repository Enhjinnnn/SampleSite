import React from 'react';

function Projectsbox(props) {
  return (
    <div className='wrapper-box'>
        <div className='wrapper-img'>
           <img className='' src={props.image} alt=''/>
        </div>
        <div className='wrapper-b-text'>
          <h2> {props.title} </h2>
        </div>
    </div>
  )
}

export default Projectsbox;