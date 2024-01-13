import React from 'react';
import './css/Tracks.css';

function Tracks() {
  return (
  
    <div className='Tracks'>
      <p className='we'>Tracks</p>
      <div className='rr'>
        <img src='assests/laptop.svg'  alt='/'/>
        <h2>Development</h2>
        <p>A track to develop Websites and Mobile Apps based on the problem statements the problem statements we have for you, in line with the theme.</p>
      </div>
      <div className='rr'>
      <img src='assests/ml.svg'  alt='/'/>
        <h2>Machine Learning</h2>
        <p>A track for all ML enthusiasts out there. It brings together participants to solve real-data challenges based on Sustainability by applying Machine learning.</p>
      </div>
      <div className='rr'>
      <img src='assests/iot.svg'  alt='/'/>
        <h2>Electronics and IoT</h2>
        <p>This track is for all those interested in electronics. It focuses on problem statements based on IoT and Digital Circuit design to solve a real-world sustainability problem.</p>
      </div>
      <div className='rr'>
      <img src='assests/bl.svg'  alt='/'/>
        <h2>Blockchain and Web3</h2>
        <p>This track is for Web3 enthusiasts to turn ideas into actual projects. It offers opportunities to work on blockchain-based problem statements focusing on different areas across NFTs, DeFi, and the metaverse to pursue a more sustainable future.</p>
      </div>
    </div>
   
  );
}

export default Tracks;
