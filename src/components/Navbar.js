import React, { Component } from 'react';
import { Link } from 'react-scroll';
import "./css/Navbar.css";
import "../App.css";
const PDF_FILE_URL = "https://drive.google.com/drive/folders/18hcG1CnTTpnntdWiw6KQWiN7K1t93S3v?usp=sharing";

class Navbar extends Component {
  state = { 
    clicked: false,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const isScrolled = scrollTop > -10;
    this.setState({ isScrolled });
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
    const { isScrolled } = this.state;

    return (
      <div className={`k ${isScrolled ? 'scrolled' : ''}`}>
        <nav>
          <div>
            {/* Use an <img> tag for your logo */}
            
            <h1>PRAJWALAN</h1>
            
          </div>
          <div id="mobile" onClick={this.handleClick}>
            {this.state.clicked ? (
              <i className="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
          <li> <Link 
      activeClass="active" 
      to="text" 
      spy={true} 
      smooth={true} 
      offset={-500} 
      duration={20} 
    
    >
      Home
    </Link></li>
            <li><Link activeClass="active" 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={20}>About</Link>
      </li>
            <li><Link activeClass="active" 
      to="Tracks" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={20}>Tracks</Link></li>
            <li><Link activeClass="active" 
      to="ca" 
      spy={true} 
      smooth={true} 
      offset={-230} 
      duration={20}>Prizes</Link></li>
            <li><Link activeClass="active" 
      to="t" 
      spy={true} 
      smooth={true} 
      offset={-150} 
      duration={20}>Faq's</Link></li>
            <li><Link href="/" onClick={() => this.openPDFInNewPage(PDF_FILE_URL)}>Resources</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
