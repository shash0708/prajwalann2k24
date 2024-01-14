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
        <div className="lines">
          <hr className="line" />
          <hr className="line" />
        </div>
        <h1>PRAJAWALAN</h1>
        <div className='oo'>
          {/* <FileEarmarkPdf className='ws' size={30} color="red" onClick={() => handleDownloadPDF(PDF_FILE_URL)} /> */}
          <button className="ww" style={{ borderRadius: '10px' }}>Register</button>
        </div>
      </div>

      <div className="home">
        <img id="d" src="assests/home1.svg" alt="/" />
      </div>
    </>
  );
}

export default Home;
