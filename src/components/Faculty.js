import React, { useRef } from 'react';
import './css/faculty.css';
import { ace, convenor, coordinators, ord, orgac, patron } from './Data/FacultyData';
import { useScroll,motion, useTransform } from 'framer-motion';
function Faculty() {
  const patronTextStyle = {
    fontSize: '20px', // You can adjust the font size here
  };
  const patronTextStyle1 = {
    fontSize: '14px', // You can adjust the font size here
  };

const ref = useRef<HTMLDivElement>(null);
const {scrollYProgress} = useScroll({
  target:ref,
  offset :["0 1","1.33 1"],
});
const sc=useTransform(scrollYProgress,[0,1],[0.5,1]);
const op=useTransform(scrollYProgress,[0,1],[0.6,1]);

  return (
    <div 
    
    
    
    className='faculty' >
      <div 
    className='overall'>
        <div 
    className='patron'>
          <h2><u>Patrons</u></h2>
          <div className='image'>
            {patron.map((item, index) => (
              <div >
                <img key={index} src={item.img} alt='/' />
                <p >{item.title}</p>
                <p >{item.Desgn}</p>

              </div>
            ))}
          </div>
        </div>
         <div className='convenor'>
          <h2><u>Convenors</u></h2>
          <div className='image1'>
            {convenor.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`Convenor ${index + 1}`} />
                <p >{item.title}</p>
                <p >{item.Desgn}</p>

              </div>
            ))}
          </div>
        </div>
          <div className='coordinator'>
          <h2><u>Coordinators</u></h2>
          <div className='image2'>
          {coordinators.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`Convenor ${index + 1}`} />
                <p>{item.title}</p>
                <p>{item.Desgn}</p>

              </div>
            ))}
          </div>
          </div>
       
        <div className='ace'>
          <h2><u>ACE Coordinators</u></h2>
          <div className='image3'>
            {ace.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`Convenor ${index + 1}`} />
                <p>{item.title}</p>
                <p>{item.Desgn}</p>

              </div>
            ))}
          </div>
        </div>
        <div className='orgac'>
          <h2><u>Organizing Commitee</u></h2>
          
          <div className='image4'>
            {ord.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`Convenor ${index + 1}`} />
                <p  >{item.title}</p>
                <p >{item.Desgn}</p>

              </div>
            ))}
          </div>
        </div>
        <div className='orgac1'>
          
          <div className='image5'>
            {orgac.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={`Convenor ${index + 1}`} />
                <p  >{item.title}</p>
                <p>{item.Desgn}</p>

              </div>
            ))}
          </div>
        </div> 
        </div>
      </div>
    
  );
}

export default Faculty;
