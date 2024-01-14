import React, { Component } from 'react';
import "./css/Navbar.css";
import "../App.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="k">
        <nav>
          <div>
            {/* Use an <img> tag for your logo */}
            {/* <img src='assests/name1.svg' alt="Logo" className="logo" /> */}
          </div>
          <div id="mobile" onClick={this.handleClick}>
            {this.state.clicked ? (
              <i className="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Tracks</a></li>
            <li><a href="/">Prizes</a></li>
            <li><a href="/">Faq's</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
