import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';


function Footer() {
  return (
    <div id='footer'>
    <div className='footer-text'>
       &copy; TetraFX 2023.&nbsp; All rights reserved.
    </div>
    <div>
        <a href='https://www.facebook.com/tetrafxstudio' target="_blank" rel='noreferrer' className='footer-button'><AiFillFacebook size={30}/></a>
        <a href='https://www.facebook.com/tetrafxstudio' target="_blank" rel='noreferrer' className='footer-button'><AiFillInstagram size={30}/></a>
        <a href='https://www.facebook.com/tetrafxstudio' target="_blank" rel='noreferrer' className='footer-button'><AiFillYoutube size={30}/></a>
        {/* <a href='https://www.facebook.com/tetrafxstudio' target="_blank" rel='noreferrer' className='footer-button'><FaDiscord size={30}/></a> */}
    </div>
    </div>
  )
}

export default Footer;