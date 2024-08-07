import React from 'react';
import { MediaData } from './Data/Data';
import './css/contact.css';
import phoneIcon from './as/ph.svg';

const iconStyle1 = {
  width: '100px',
  height: '100px',
  marginRight: '8px',
  verticalAlign: 'middle', // Align the icon vertically with the text
};
const PDF_FILE_URL =
  'https://unstop.com/p/prajwalan-2k24-sagi-rama-krishnam-raju-engineering-college-srkrec-bhimavaram-861159?lb=6yge2wf&utm_medium=Share&utm_source=WhatsApp';
  const openPDFInNewPage = () => {
    window.open(PDF_FILE_URL, '_blank');
  };
  const PDF_FILE_URL1 =
  'https://drive.google.com/drive/folders/18hcG1CnTTpnntdWiw6KQWiN7K1t93S3v'
  const openPDFInNewPage1 = () => {
    window.open(PDF_FILE_URL1, '_blank');
  };
  const phoneNumber = '+1234567890'; // Replace with your phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="Contact">
          <h1 className='kk'>Follow Us</h1>
          <div className="social-media">
            {MediaData.map((item, index) => (
              <div key={index} className="icon-container">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt='media' className="social-icon" />
                </a>
              </div>
            ))}
          </div>
          <div className="buttons-container">
         
<button className="contact-button" onClick={() => window.location.href = "mailto:srkrprajwalanofficial@gmail.com"}>Contact Us</button>
            <button className="register-button"  onClick={openPDFInNewPage}>Register</button>
            <button className="about-button" onClick={openPDFInNewPage1}>Resources</button>

          </div>
          <footer className='fk'>
          <p>&#169;2024| All rights reserved | Association of Computer Engineers | Dept of CSE ,SRKR Engineering College</p>
          </footer>
        </div>
       
      </main>
    </React.Fragment>
  );
}

export default MainPage;
