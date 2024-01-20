import React, { Component } from 'react';
import { Link } from 'react-scroll';
// import Timer from './Timer1';
import "./css/Navbar.css";
import "../App.css";
const PDF_FILE_URL = "https://drive.google.com/drive/folders/18hcG1CnTTpnntdWiw6KQWiN7K1t93S3v?usp=sharing";

class Navbar extends Component {
  state = { 
    clicked: false,
    isScrolled: false,
  };

  
  openPDFInNewPage = () => {
    window.open(PDF_FILE_URL, '_blank');
  };

  handleClick = () => {

    
    this.setState({
      clicked: !this.state.clicked
    });
  };



  handleDownloadPDF = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", fileName);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  render() {
    const { isScrolled, clicked } = this.state;
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

    return (
      <div className={`k ${isScrolled ? 'scrolled' : ''}`}>
        <nav>
          <div>
            {/* Use an <img> tag for your logo */}
            <h1>PRAJWALAN 2K24</h1>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            {clicked ? (
              <i className="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li><Link 
              activeClass="active" 
              to="text" 
              spy={true} 
              smooth={true} 
              offset={-500} 
              duration={20} 
            >
              Home
            </Link></li>
            <li><Link 
              activeClass="active" 
              to="About" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={20}
            >
              About
            </Link></li>
            <li><Link 
              activeClass="active" 
              to="Tracks" 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={20}
            >
              Tracks
            </Link></li>
            <li><Link 
              activeClass="active" 
              to="ca" 
              spy={true} 
              smooth={true} 
              offset={isMobile ? -600 : -1400}  
              duration={20}
            >
              HOF
            </Link></li>
            <li><Link 
              activeClass="active" 
              to="ca" 
              spy={true} 
              smooth={true} 
              offset={-230} 
              duration={20}
            >
              Prizes
            </Link></li>
            <li><Link 
              activeClass="active" 
              to="t" 
              spy={true} 
              smooth={true} 
              offset={-150} 
              duration={20}
            >
              Faq's
            </Link></li>
            <li><Link href="/" onClick={() => this.openPDFInNewPage(PDF_FILE_URL)}>Resources</Link></li>
            <li><Link 
              activeClass="active" 
              to="t" 
              spy={true} 
              smooth={true} 
              offset={500} 
              duration={20}
            >
              Know us
            </Link></li>

            <li><Link 
              activeClass="active" 
              to="t" 
              spy={true} 
              smooth={true} 
              offset={10000} 
              duration={20}
            >
              Contact Us
            </Link></li>
          </ul>
        </nav>
      
      </div>
    );
  }
}

export default Navbar;