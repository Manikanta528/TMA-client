import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [taskCompleted, settaskCompleted] = useState(0);
  const [taskInCompleted, settaskInCompleted] = useState(0);
  const [pomodoroHours, setpomodoroHours] = useState(0);
  const [notesSaved, setnotesSaved] = useState(0);


  let email = localStorage.getItem("email");
  useEffect(() => {
    console.log(email);
    fetch("http://localhost:5001/api/dashboard/" + email, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data[0]);
        setName(res.data[0].name);
        settaskCompleted(res.data[0].tasksCompleted);
        settaskInCompleted(res.data[0].tasksInCompleted);
        setpomodoroHours(res.data[0].pomodoros);
        setnotesSaved(res.data[0].NotesSaved);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [0]);

  useEffect(() => {
    if(localStorage.getItem("email") === null){
      window.location.href = "/login";
    }
  },[])

  
  // qoute generator
  const [quote, setQuote] = useState("");
  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
  };

  useEffect(() => {
    getQuote();
    const intervalId = setInterval(getQuote, 10000);

    return () => clearInterval(intervalId);
  }, []);

  let time = [Math.floor(pomodoroHours/60), pomodoroHours%60 ]; 
  return (
    <>
      <NavBar index="4" />
      <div className="dashboard">
        <h1 className="dashboard-title">Dashboard :</h1>
        <h1 style={{ color: "#609966", marginTop: "40px" }}>
          Hi, {name}!
        </h1>
        <div className="quote-generator">
          <p className="quote" style={{ color: "#696969" }}>
            {quote}
          </p>
        </div>
        
        <div className="dashboard-show">
          <div className="row">
            <div className="card">
              <h4 className="card-title"> Completed Tasks </h4>
              <p className="card-value">{taskCompleted}</p>
            </div>
            <div className="card">
              <h4 className="card-title">Time Spent to Work</h4>
              <p className="card-value">{time[0]}hr:{time[1]}mins</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <h4 className="card-title"> InComplete Tasks</h4>
              <p className="card-value">{taskInCompleted}</p>
            </div>
            <div className="card">
              <h4 className="card-title">Notes Saved</h4>
              <p className="card-value">{notesSaved}</p>
            </div>
          </div>
          
        </div>
        
        
      </div>
    </>
  );
};

export default Dashboard;
