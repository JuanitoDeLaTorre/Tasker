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
            <h1>Minutes: {minutes}</h1>
            <h1>Seconds: {seconds}</h1>

            <div id="countdown">
                <div id="countdown-number">{minutes}m {seconds}s</div>
                <svg>
                    <circle style = {{animation: style}} r="18" cx="20" cy="20"></circle>
                </svg>
            </div>
        </>


    )

}

export default Timer;