import React, { useState, useEffect } from 'react';
import './css/timer.css';

function Timer({start, minutesProp, selectedOption}) {
  
    const [minutes, setMinutes] = useState(3)
    const [seconds, setSeconds] = useState(0)
    const [style, setStyle] = useState('none')

    useEffect(()=> {

        if(start){

            if(!minutesProp){
                console.log("setting null!")
                setMinutes(3)
            } else {
                console.log("setting incoming!")
                setMinutes(minutesProp)
            }
        } 
    
    }, [start, minutesProp])

    useEffect(() => {
        // Calculate the style based on the updated minutes state.
        const computedStyle = `countdown ${minutes * 60}s linear infinite forwards`;
        console.log(computedStyle);
        setStyle(computedStyle);
    }, [minutes]);

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
                    <div className="textBackground">
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                        <div>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                            <h2>{selectedOption}</h2>
                        </div>
                    </div>
                    <svg>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'rgb(182, 232, 214)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'rgb(182, 232, 214)', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                        <circle style = {{animation: style}} stroke = 'url(#gradient)' r="18" cx="50%" cy="50%" fill = 'rgb(89, 205, 163)'>
                        </circle>
                        <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fill="white" fontSize="35">{minutes}m {seconds}s</text>

                    </svg>
                </div>
                    {/* <h4 style = {{backgroundColor: 'transparent'}}>Working on : {selectedOption}</h4> */}
        </>


    )

}

export default Timer;