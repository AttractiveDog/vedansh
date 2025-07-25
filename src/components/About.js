import React from 'react';
import proPic from '../media/download.png';
import '../css/components/About.css';

const About = () => {
    return(
        <section id="about" className="about-section">
            <div className="about-container container to-slide up">
                <div className="about-text">
                    <h3>About Me</h3>
                    <p className="about-info">I am a passionate software engineer from India with expertise in Python and JavaScript development. What began as a hobby has evolved into a professional pursuit, driving me to create innovative solutions and push the boundaries of technology.</p>
                    
                </div>
                <div className="about-photo">
                    <img className="propic" alt="Vedansh profile" src={proPic}/>
                </div>
            </div>
        </section>
    );
}

export default About
