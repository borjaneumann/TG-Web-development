import React from 'react';
import ReactDOM from 'react-dom';
import '../navbar/NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar(){
    return (<div className='navbar'>
        <ul>
            <li>NEU</li>
        </ul>
        <ul className="navbar-links">
            <Link
                    className="navbar-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Home
            </Link>
            <Link
                    className="navbar-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About
            </Link>
            <Link
                    className="navbar-link"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Gallery
            </Link>
            <Link
                    className="navbar-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                >Contact
            </Link>


            {/* <li><a href='#home'>Home</a> </li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Gallery</a></li>
            <li><a href='#contact'>Contact</a></li> */}
        </ul>
        
        </div>);
    
}

export default Navbar;