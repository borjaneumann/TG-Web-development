import React from 'react';
import '../footer/footer.css'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer(){
    return (
        <div className="footer-container">
            <ul>
                <li><a href="https://www.es.linkedin.com" ><AiFillLinkedin /></a></li>
                <li><a><AiOutlineWhatsApp /></a></li>
                <li><a><AiFillFacebook /></a></li>
                <li><a><AiFillTwitterSquare /></a></li>
                <a href="www.google.com"></a>
                
            </ul>
            <p>© 2020 - All Rights Reserved</p>
        </div>
    )
}
export default Footer;