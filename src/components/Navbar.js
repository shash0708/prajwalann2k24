import React, { Component } from 'react';
import { Link } from 'react-scroll';
import "./css/Navbar.css";
import "../App.css";
const PDF_FILE_URL = "r.pdf";

class Navbar extends Component {
  state = { clicked: false };

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
    return (
      <div className="k">
        <nav>
          <div>
            {/* Use an <img> tag for your logo */}
            <img src='assests/name1.svg' alt="Logo" className="logo" />
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
            <li><Link href="/" onClick={() => this.handleDownloadPDF(PDF_FILE_URL)}>Resources</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
