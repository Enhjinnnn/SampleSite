import React from 'react';

function Projectsbox(props) {
  return (
    <div className='a-box'>
       <div className='a-b-img'>
        <img src={props.image} alt=''/>
       </div>
       <div className='a-b-text'>
        <h2> {props.title} </h2>
        <p>Mongolian folk metal band The Hu's Virtual concert.</p>
       </div>
    </div>
  )
}

export default Projectsbox;