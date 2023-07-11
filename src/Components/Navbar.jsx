import React, {useState} from 'react';
import logo from '../img/TetraLogo.png';
import {Link} from 'react-scroll';


function Navbar() {

  const [nav,setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50){
        setnav(true);
    }
    else{
        setnav(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
   <nav className={nav ? "nav active" : "nav"}>
   
    <Link to = 'main' className='logo' smooth={true} duration={2000} >
       <img className='logoImg' src={logo} alt=''/>
    </Link>  
    <input className='menu-btn' type='checkbox' id='menu-btn'/>
    <label>
        <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
        <li><Link to='main' smooth={true} duration={1000} > Home </Link></li>
        <li><Link to='features' smooth={true} duration={1000} > Projects </Link></li>
        <li><Link to='portfolio' smooth={true} duration={1000} > Portfolio </Link></li>
        <li><Link to='about' smooth={true} duration={1000} > About us </Link></li>
        <li><Link to='contact' smooth={true} duration={1000} > Contact us </Link></li>
    </ul>

   </nav>
  )
}

export default Navbar