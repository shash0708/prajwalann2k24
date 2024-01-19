import React, { useState, useEffect } from 'react';
import { FileEarmarkPdf } from 'react-bootstrap-icons';
import { Fade } from 'react-awesome-reveal';

import Timer from "./Timer1";

import Popup from './Popup';
import './css/Home.css';

const PDF_FILE_URL =
  'https://unstop.com/p/prajwalan-2k24-sagi-rama-krishnam-raju-engineering-college-srkrec-bhimavaram-861159?lb=6yge2wf&utm_medium=Share&utm_source=WhatsApp';

function Home() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true); // Adjust this state based on your logic

  const openPDFInNewPage = () => {
    window.open(PDF_FILE_URL, '_blank');
  };

  useEffect(() => {
    // You can add your logic to determine if registration is open or closed
    // For example, you can fetch this information from an API or use local state
    // For now, I'm just setting it to true for demonstration purposes
    setIsRegistrationOpen(true);
  }, []);

  return (
    <>
      <div className="text">
     
        <Fade direction="down" triggerOnce={true} duration={1000}>
          <h6 className="w">ASSOCIATION OF COMPUTER ENGINEERS </h6>
        </Fade>
        <Fade direction="up" triggerOnce={true} duration={4500}>
          <p className="u">PRESENTS</p>
        </Fade>

        <Fade triggerOnce={true} direction="down" duration={5000}>
          <h1>PRAJWALAN 2024</h1>
        </Fade>
        <div className="oo">
          <Fade triggerOnce={true} direction="up" duration={10000}>
            <button className="ww" style={{ borderRadius: '10px' }} onClick={openPDFInNewPage}>
              Register
            </button>
          </Fade>
        </div>
        <div className='tim'>
        <Popup />
        {/* <Timer/> */}
        </div>
      </div>

     

      <div className="home">
        <img id="d" src="assests/home1.svg" alt="/" />
      </div>
    </>
  );
}

export default Home;
