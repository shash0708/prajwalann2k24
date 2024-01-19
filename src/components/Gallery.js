import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bhImage from './as/1st.jpg';
import bhImage1 from './as/2nd.jpg';
import bhImage2 from './as/3rd.jpg';   // Import the image file
   // Import the image file
import './css/gallery.css';

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='sebms1'>
      <div className="slider-text">
       <p>Hall of Fame</p>
       </div>
      <div className="carousel-container">
        <Carousel className='carousel-image'activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={bhImage} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bhImage1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bhImage2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
   </div>
    </div>
  );
}

export default Gallery;
