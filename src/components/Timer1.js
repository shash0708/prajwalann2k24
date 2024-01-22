import React, { useState, useEffect,useRef } from 'react';
import './css/timer.css';
const Timer = () => {
 const [timeDays,setTimerDays]  =useState('00');
 const [timeHours,setTimerHours]  =useState('00');
 const [timeMinutes,setTimerMinutes,]  =useState('00');
 const [timeSeconds,setTimerSeconds]  =useState('00');

let interval = useRef();

const startTImer =()=>{
    const countDate  = new Date('February 07, 2024 00:00:00').getTime();

    interval = setInterval(()=>{
        const now = new Date().getTime();
        const difference = countDate - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

     if(difference<0){
        clearInterval(interval.current);
     }
     else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);

     }

    
    },1000);
};

 
    
//     return {
//       xd: days < 10 ? `0${days}` : days,
//       xh: hours < 10 ? `0${hours}` : hours,
//       xm: minutes < 10 ? `0${minutes}` : minutes,
//       xs: seconds < 10 ? `0${seconds}` : seconds,
//     };
//   }

  useEffect(() => {
  startTImer();
  return ()=>{
    clearInterval(interval.current);
  }
});

//     return () => clearInterval(intervalId);
//   }, []);

 return (
    <section className='timer-container'>
         <section className='timer'>
                <div>
                    <span className='mdi mdi-calender-clock timer-icon'></span>
                 
                <p>Registration Closes in</p>
                </div>
                <div>
                    <section>
                        <p>{timeDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timeHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>  
                    <section>
                        <p>{timeMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                      <section>
                        <p>{timeSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                 
                </div>
         </section>
    </section>
  );
};

export default Timer;
