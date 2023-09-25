import React, { useState, useEffect } from 'react';
import './css/timer.css';

function Timer({start, minutesProp}) {
  
    const [minutes, setMinutes] = useState(3)
    const [seconds, setSeconds] = useState(0)
    const [style, setStyle] = useState('none')

    useEffect(()=> {

        if(start){

            setMinutes(minutesProp)

            const computedStyle = `countdown ${(minutesProp) * 60}s linear infinite forwards`;
            setStyle(computedStyle);
        } 

        setMinutes(minutesProp)
    
    }, [start, minutesProp])

    useEffect(() => {
        if(start){


            

            const timerInterval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                clearInterval(timerInterval); // Stop the timer when both minutes and seconds are 0
                } else {
                setMinutes(minutes - 1);
                setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
            }, 1000);
        
            return () => clearInterval(timerInterval);
        }

        
      }, [minutes, seconds, start]);

    return (

        <>
                <div className="timer-container">
                    <svg>
                        <circle style = {{animation: style}} r="18" cx="50%" cy="50%"></circle>
                        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white" font-size="35">{minutes}m {seconds}s</text>

                    </svg>

                </div>
        </>


    )

}

export default Timer;