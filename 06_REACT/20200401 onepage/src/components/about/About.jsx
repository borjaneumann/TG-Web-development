import React from 'react';
import '../about/About.css'
//import ProgressBar from 'react-customizable-progressbar'
import { Line, Circle } from 'rc-progress';
import item from "../about/neu.jpg"
 
class About extends React.Component{
    render(){
        return <div  id='about' className='about-container'>
            <h2  >About Me</h2>
            <div className='about-info'>
                <div className="about-personalInfo">
                    <h3>Neumann</h3>
                    <img src={item} alt="chucky"/>
                    <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio esse cumque sequi voluptatibus, nam, sint veritatis incidunt rem molestias molestiae veniam ipsum temporibus libero ad doloribus dolore nostrum eum enim officia vitae eligendi iste pariatur? 

                    </p>

                </div>
                <div className="about-skills">
                    <h3>Computer Skills</h3>
                    <div className="about-bar">
                        <p>Office Suite</p>
                        <Line 
                        percent="60"/>
                    </div>
                    <div className="about-bar">
                        <p>Photoshop</p>
                        <Line 
                        percent="20"/>
                    </div>
                    <div className="about-bar">
                        <p>Salesforce</p>
                        <Line 
                        percent="60"/>
                    </div>
                    <div className="about-bar">
                        <p>Git</p>
                        <Line 
                        percent="40"/>
                    </div>
                    <div className="about-bar">
                        <p>Linux</p>
                        <Line 
                        percent="40"/>
                    </div>
                </div>
                <div className="about-skills">
                    <h3>Programming Skills</h3>
                    <div className="about-bar">
                        <p>HTML</p>
                        <Line 
                        percent="60"/>
                    </div>
                    <div className="about-bar">
                        <p>CSS</p>
                        <Line 
                        percent="20"/>
                    </div>
                    <div className="about-bar">
                        <p>SASS</p>
                        <Line 
                        percent="60"/>
                    </div>
                    <div className="about-bar">
                        <p>JAVASCRIPT</p>
                        <Line 
                        percent="40"/>
                    </div>
                    <div className="about-bar">
                        <p>REACT</p>
                        <Line 
                        percent="40"/>
                    </div>
                    
                    
                    


                </div>

            </div>
        
        
        </div>
    }
        
        

    
}
export default About;