import React from 'react';
import { MediaData } from './Data/Data';
import './css/contact.css';
import phoneIcon from './as/ph.svg';

const iconStyle = {
  width: '100px',  // Adjust the width as needed
  height: '80px', // Adjust the height as needed
};

const phoneNumbers = [
  '123-456-7890',
  '987-654-3210',
  '555-123-4567',
];

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="Contact">
          <h1 className='oi'>Contact Us</h1>
          <ul className="phone-list" style={{position:'absolute',left:'1150px',marginTop:'50px',color:'white'}}>
            {phoneNumbers.map((number, index) => (
              <li key={index}>
                <img src={phoneIcon} alt='phone' style={{ width: '20px', height: '20px', marginRight: '-8px', }} />
                {number}
              </li>
            ))}
          </ul>
          <div className='line'></div>

          <h1 className='kk'>Follow Us</h1>
          <div className="flex flex-wrap justify-around">
            {MediaData.map((item, index) => (
              <div key={index} className="icon-container">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt='media' style={iconStyle} />
                </a>
              </div>
            ))}
          </div>

          
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
