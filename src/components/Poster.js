import React, { useState, useEffect } from 'react';

function Poster() {
    const [isPopupOpen, setPopupOpen] = useState(true);

    useEffect(() => {
      // Trigger the popup on page load
      setPopupOpen(true);
  
      // Set a timeout to close the popup after 6000 milliseconds (6 seconds)
      const timeoutId = setTimeout(() => {
        setPopupOpen(false);
      }, 6000);
  
      // Attach click event listener to the entire document
      const handleDocumentClick = () => {
        setPopupOpen(false);
      };
      document.addEventListener('click', handleDocumentClick);
  
      // Cleanup effect to clear the timeout and remove the click event listener
      return () => {
        setPopupOpen(false);
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
  return (
    <div>
      {isPopupOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
            }}
            
          >
            <img
              src='assests/poster1.png'
              alt='/'
              
              style={{ width: '1000px', maxWidth:'100%',maxHeight:'100%',height: '600px', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Poster;
