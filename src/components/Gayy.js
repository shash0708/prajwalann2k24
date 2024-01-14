import React, { useState } from 'react';
import './YourStylesheet.css'; // Import your own stylesheet

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-container">
      <div className="topnav">
        <a href="#home" className={isMenuOpen ? '' : 'active'}>
          Logo
        </a>
        <div id="myLinks" style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={handleToggle}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </a>
      </div>

      <div style={{ paddingLeft: '16px' }}>
        <h3>Vertical Mobile Navbar</h3>
        <p>
          This example demonstrates how a navigation menu on a mobile/smart phone could look like.
        </p>
        <p>Click on the hamburger menu (three bars) in the top right corner to toggle the menu.</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
