import React from 'react';
import '../contactOwn/Contact_own.css'
// import {AiOutlineMail  } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";


function ContactOwn(){
    return(
        <div className="contactOwn-container-global">
        <div className="contactOwn-container" id='contact'>
            <div className="contactOwn-info">
                <h3 className="contactOwn-info-title">Contact Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut eius illum rerum magnam sapiente!
                </p>
                <p><AiOutlineMail /> Mail me at info@email.com!</p>
                <p>< AiFillPhone/> Call me on +31 651123456</p>

            </div>
            <div className="contactOwn-form">
                <div className="contactOwn-form-name field">
                    <label htmlFor="name">Name </label>
                    <input type="text"/>
                </div>
                <div className="contactOwn-form-surname field">
                    <label htmlFor="surname">Surname </label>
                    <input type="text"/>
                </div>
                <div className="contactOwn-form-email field">
                    <label htmlFor="email">Email </label>
                    <input type="email"/>
                </div>
                <div className="contactOwn-form-message field">
                    <label htmlFor="message">Message </label>
                    <textarea rows="4" cols="50" name="comment" form="usrform">Enter message here</textarea>
                </div>
                <div className="contactOwn-form-submit field">
                    <button>Submit</button>
                </div>
            </div>
        </div>
        <div className="contact-footer">

        </div>
    </div>
    )
}
 

export default ContactOwn;