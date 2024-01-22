import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bhImage from './as/ebms.jpg';
import bhImage1 from './as/sbm.jpg';   // Import the image file
import './css/sebms.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='sebms'>
      <div className="slider-text">
       <p>Our Student Chapter</p>
       <div>Association of Computer Engineers</div>

       </div>
   

      <div className="carousel-container">
        <Carousel className='carousel-image'activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={bhImage} alt="First slide" />
            <p>Executive Body Members</p>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bhImage1} alt="Second slide" />
            <p>Senior Body Members</p>
          </Carousel.Item>
        
        </Carousel>
   </div>
    </div>
  );
}

export default ControlledCarousel;
