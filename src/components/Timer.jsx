import React, { useEffect, useState } from "react";
import './styles/Timer.css'
export default function Timer({ totalTime, onTimeEnd }) {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const progressPercentage = (timeLeft / totalTime) * 100;

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Decrease timeLeft every 1 second

      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    } else {
      onTimeEnd(); // Optional: Call a callback when time reaches 0
    }
  }, [timeLeft, totalTime, onTimeEnd]);

  return (
    <div className="timer-container">
      <div className="timer-bar">
        <div
          className="timer-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="timer-text">{timeLeft}s left</p>
    </div>
  );
}
