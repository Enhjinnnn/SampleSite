import React from "react";
import './navbar.scss'
import {BiGrid, BiLogInCircle, BiLogoBlender} from 'react-icons/bi'

const Navbar = () => {
    return(
      <section className="navBarSection"> 
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1>
                    <BiLogoBlender className="icon"/>
                        Company Profile Website
                    </h1>
                </a>
            </div>

            <div className="navBar">
                <ul className="navlists flex">
                    <li className="navIten">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navIten">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navIten">
                        <a href="#" className="navLink">Road Map</a>
                    </li>

                    <li className="navIten">
                        <a href="#" className="navLink">Project Team</a>
                    </li>

                    <li className="navIten">
                        <a href="#" className="navLink">Blog</a>
                    </li>

                    <li className="navIten">
                        <a href="#" className="navLink">Contact Us</a>
                    </li>

                    <button className='btn'>
                        <a href="#">Contact Us</a>
                    </button>
                 </ul>
                 </div>

                <div className="closeNavBar">
                    <BiLogInCircle className="icon"/>
                </div>

                <div className="toggleNavBar">
                    <BiGrid className="icon"/>
                </div>

        </header>
      </section>
    )
}

export default Navbar