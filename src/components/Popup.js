import React, { useEffect, useState } from 'react';
import './css/popup.css'; // Make sure to create a corresponding CSS file

const Popup = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set a timeout after component is mounted
    const timeoutId = setTimeout(() => {
      document.querySelector(".popup").style.display = "block";
    }, 3000);

    // Clean up function to clear timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const endDate = new Date("2024-02-07T23:59:59"); // Set your desired end date and time

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = endDate - now;

      if (timeDifference > 0) {
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        // Countdown has ended, you can handle this case as needed
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clean up function to clear the interval when the component is unmounted
    return () => clearInterval(countdownInterval);
  }, []);

  const handleClose = () => {
    document.querySelector(".popup").style.display = "none";
  };

  // Close popup when clicking anywhere on the screen
  const handleScreenClick = () => {
    handleClose();
  };

  // Attach the click event to the body
  useEffect(() => {
    document.body.addEventListener('click', handleScreenClick);

    // Clean up function to remove the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener('click', handleScreenClick);
    };
  }, []);

  return (
    <div className="popup">
      <button id="close" onClick={handleClose}>&times;</button>
      <div className="bg-white-800 h-32 ">
        <div>
          <div className="main">
            <div className="overlay">
              <div className="title" id="title">Registration Closes in</div>
              <div className="title" id="end-date" style={{ display: 'none' }}></div>
              <div className="col">
                <div className="io">
                  <label htmlFor="" className='gg'>Days
                    <br />
                    <input type="text" readOnly value={days} />
                  </label>
                </div>
                <div>
                  <label htmlFor="">Hours
                    <br />
                    <input type="text" readOnly value={hours} />
                  </label>
                </div>
                <div>
                  <label htmlFor="">Minutes
                    <br />
                    <input type="text" readOnly value={minutes} />
                  </label>
                </div>
                <div className="oop">
                  <label htmlFor="">Seconds
                    <br />
                    <input type="text" readOnly value={seconds} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
