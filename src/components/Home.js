import React from 'react';
import { FileEarmarkPdf } from 'react-bootstrap-icons';

import "./css/Home.css";

const PDF_FILE_URL = "r.pdf";

function Home() {
  const handleDownloadPDF = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", fileName);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  return (
    <>
      <div className="text">
        <p>ACE PRESENTS</p>
        <h1>PRAJWALAN 2024</h1>
        <div className="icon-container">
          <span>Prizes worth ₹ 30,000</span>
        </div>
        <div> 
          <button className="ww" style={{ borderRadius: '10px' }}>Register</button>
          <FileEarmarkPdf size={30} color="red" onClick={() => handleDownloadPDF(PDF_FILE_URL)} />
        </div>
      </div>

      <div className="home">
        <img id="d" src="assests/home1.svg" alt="/" />
      </div>
    </>
  );
}

export default Home;
