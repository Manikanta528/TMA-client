import React, { useState, useEffect, useRef } from "react";
import "../styles/PomodoroTimer.css";
import NavBar from "./NavBar";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      if(!isBreak){
        fetch("http://localhost:5001/api/pomodoro", {
          method: "POST",
          body: JSON.stringify({ email: localStorage.getItem("email") , time : 25}),
          headers: { "Content-Type": "application/json" },
        });
      }
      setIsRunning(false);
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time, isBreak]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  return (
    <>
    <NavBar index="2"/>
    <div className="pomodoro-timer">
      <div className="status">{isBreak ? "Break" : "Work"}</div>
      <h2 className="timer">{formatTime(time)}</h2>
      <div className="buttons">
        {isRunning ? (
          <button className="timer-button" onClick={handleStop}>
            Stop
          </button>
        ) : (
          <button className="timer-button" onClick={handleStart}>
            Start
          </button>
        )}
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      
    </div>
    </>
  );
};

export default PomodoroTimer;
