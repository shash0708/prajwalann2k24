import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    months: 0,
    hours: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the elapsed time
      const now = new Date();
      const startTime = new Date('Your Start Date');
      const elapsedTime = Math.floor((now - startTime) / 1000);

      // Calculate days, months, hours, and seconds
      const days = Math.floor(elapsedTime / (24 * 60 * 60));
      const months = Math.floor(days / 30); // Simplified calculation
      const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / 3600);
      const seconds = elapsedTime % 60;

      setTime({
        days,
        months,
        hours,
        seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <marquee>
        <p>
          Elapsed Time:
          <br />
          {time.months > 0 && <span>{time.months} months </span>}
          {time.days > 0 && <span>{time.days} days </span>}
          {time.hours > 0 && <span>{time.hours} hours </span>}
          {time.seconds > 0 && <span>{time.seconds} seconds</span>}
        </p>
      </marquee>
    </div>
  );
};

export default Timer;
