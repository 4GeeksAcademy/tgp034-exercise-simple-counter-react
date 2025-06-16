import React, { useState, useEffect } from 'react';
import './SecondsCounter.css'

export default function SecondsCounter() {
  let [count, setCount] = useState(0);
  let [startTimer, setStartTimer] = useState(true);   
  let [alertTime, setAlertTime] = useState(-1);
  useEffect(() => {
    if (!startTimer) return;
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [startTimer]);

  useEffect(() => {
    if (!startTimer) return;
    if (count === alertTime) {
      setTimeout(() => {
        alert("Alert time reached!");
      }, 10);
    }
  }, [count, alertTime, startTimer]);

  let seconds = count % 60;
  let minutes = Math.floor(count / 60);
  let hours = Math.floor(count / 3600);

  // Formateamos siempre con dos dígitos
  let secChars = String(seconds).padStart(2, '0').split('');
  let minChars = String(minutes % 60).padStart(2, '0').split('');
  let hourChars = String(hours).padStart(2, '0').split('');

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h5 className="m-1">Alert time: </h5>
        <input id="alert-time" className="m-1" type="text" placeholder="Alert time" onChange={e => setAlertTime(parseInt(e.target.value))}/>
      </div>
      <div className="d-flex align-items-center px-4 py-2 rounded " style={{ backgroundColor: 'black' }}>
        <div className="timer-box d-flex align-items-center justify-content-center bg-dark text-white rounded mx-1 px-3 py-3">
          <i className="fa-regular fa-clock"></i>
        </div>
        {hourChars.map((ch, i) => (
          <div
            className="num bg-dark text-white d-flex justify-content-center align-items-center mx-1 px-2 rounded"
          >
            {ch}
          </div>
        ))}
        <h2 className="text-white">:</h2>
        {minChars.map((ch, i) => (
          <div
            className="num bg-dark text-white d-flex justify-content-center align-items-center mx-1 px-2 rounded"
          >
            {ch}
          </div>
        ))}
        <h2 className="text-white">:</h2>
        {secChars.map((ch, i) => (
          <div
            className="num bg-dark text-white d-flex justify-content-center align-items-center mx-1 px-2 rounded"
          >
            {ch}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="stop m-2" onClick={() => setStartTimer(false)}> Stop</button>
        <button className="resume m-2" onClick={() => setStartTimer(true)}> Resume</button>
        <button className="reset m-2" onClick={() => setCount(0)}> Reset</button>
      </div>
    </div>
  );
}

