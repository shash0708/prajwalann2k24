import React from 'react';
import { FileEarmarkPdf } from 'react-bootstrap-icons';
import { Fade } from "react-awesome-reveal";
import "./css/Home.css";

const PDF_FILE_URL = "https://unstop.com/p/prajwalan-2k24-sagi-rama-krishnam-raju-engineering-college-srkrec-bhimavaram-861159?lb=6yge2wf&utm_medium=Share&utm_source=WhatsApp";

function Home() {

  const openPDFInNewPage = () => {
    window.open(PDF_FILE_URL, '_blank');
  };

  return (
    <>
      <div className="text">
        <Fade triggerOnce={true}>
          <p>ACE PRESENTS</p>
        </Fade>

        <Fade triggerOnce={true} direction="down" duration={5000}>
          <h1>PRAJWALAN</h1>
        </Fade>
        <div className='oo'>
          <Fade triggerOnce={true} direction="up" duration={10000}>
            <button className="ww" style={{ borderRadius: '10px' }} onClick={openPDFInNewPage}>Register</button>
          </Fade>
        </div>
      </div>

      <div className="home">
        <img id="d" src="assests/home1.svg" alt="/" />
      </div>
    </>
  );
}

export default Home;
