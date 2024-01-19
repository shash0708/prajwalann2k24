// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const endDate = new Date('February 7, 2024 00:00:00').getTime();
//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

//   function calculateTimeRemaining() {
//     const now = new Date().getTime();
//     const difference = endDate - now;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     return {
//       xd: days < 10 ? `0${days}` : days,
//       xh: hours < 10 ? `0${hours}` : hours,
//       xm: minutes < 10 ? `0${minutes}` : minutes,
//       xs: seconds < 10 ? `0${seconds}` : seconds,
//     };
//   }

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1 style={{ color: 'red' }}>Registration Closes</h1>
//       {`${timeRemaining.xd}d ${timeRemaining.xh}h ${timeRemaining.xm}m ${timeRemaining.xs}s`}
//     </div>
//   );
// };

// export default Timer;
