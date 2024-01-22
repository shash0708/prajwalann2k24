import React from 'react'
import { Fade } from "react-awesome-reveal";
import './css/About.css'


function About() {
  return (
    
    <div className='About'>
          

          <div className="card">
            <div  className='coll'>
            <img className='dj1' src='assests/Sustainability.svg'alt='/'/>
    </div>
    <div className='re'> 
    <Fade triggerOnce="true">
            <h1 className='vv1'>The Hackathon</h1>
            </Fade>

      <p className='vv'>"Association Of Computer Engineers" is coming up with another fantastic hackathon called "Prajwalan 2k24" 
 Join this dynamic event to enhance your critical thinking, collaborate with skilled teams, and gain invaluable experience.
This 24hr hackathon fills up with exciting prizes, interesting refreshments, fun event, goodies and lot more. Our highly qualified evaluators with a pinch of mentoring makes it more exhilarating.This hackathon is encouraging many booming technologies like  ML, Web-Development, Cloud Computing, CyberSecurity, IoT etc.
Your presence is highly appreciated seize the opportunity to elevate your skills and create lasting connections!</p>
   </div>
  </div>
  
  </div>
 


  )
}

export default About
