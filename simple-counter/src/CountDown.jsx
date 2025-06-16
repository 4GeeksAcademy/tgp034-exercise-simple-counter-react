import React, { useState, useEffect } from 'react';

export default function CountDown() {
    let [count, setCount] = useState(0);
    let [startTimer,setStartTimer] = useState(false);   

    useEffect(() => {
        if (!startTimer) return;  
        if (count <= 0){
            setStartTimer(false);
            setCount(0);
             setTimeout(() => {
                alert("Countdown time ended!");
            }, 10);
        }          
        const id = setInterval(() => {
        setCount(c => c - 1);
        }, 1000);
        return () => clearInterval(id);
    }, [count, startTimer]);

    return (
        <div className="d-flex align-items-center justify-content-around p-5">
        <input id="startTime" className="w-25" placeholder="Time" ></input>
        <button className="start" onClick={() => {
            document.getElementById('startTime').value == "" ? setCount(0) : setCount(parseInt(document.getElementById('startTime').value));
            setStartTimer(true);
        }}> Start</button>
        <div className="d-flex">
            <h4 className="me-2">Timer:</h4>
            <h4 id="timer">{String(count).padStart(2, '0')}</h4>
        </div>
        </div>
    );
}
