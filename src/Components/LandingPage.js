import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <h3 style={{ fontWeight: "700" }}> TMA </h3>
        <div className="cta-btns">
          <button className="secondary-btn">Log in</button>
          <button className="main-btn">Sign Up</button>
        </div>
      </nav>
      <main className="main-section">
        <h1 style={{ fontSize: "64px" }}>
          <center>
            Organize your life and Manage
            <br /> your work with TMA
          </center>
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "200",
            margin: "40px 0px 64px 0px",
          }}
        >
          <center>
            It's time to have fun when you get things done! Join over TMA and{" "}
            <br /> improve your life one task at a time.
          </center>
        </p>
        <button
          className="main-btn"
          style={{ fontWeight: "700", padding: "12px 24px" }}
        >
          Sign Up Now
        </button>
        <div className="scroll">
          <div>
            <AiOutlineArrowDown className="down-arrow" />
            <span className="scroll-text">Know more</span>
            <AiOutlineArrowDown className="down-arrow" />
          </div>
        </div>
      </main>
      <section className="features-section">
        <div className="ft-text">Features</div>
        {/* f1 */}
        <div className="features1">
          <div className="ft-info">
            <h3 className="ft-info-title">Organize everything in life</h3>
            <p className="ft-info-subtitle">
              Whether there is a work-related task or a personal goal, TMA is
              here to help you manage all your to-dos.
            </p>

            <a href="#" className="ref-link">
              Read More...
            </a>
          </div>
          <div className="ft-info-img ft-img1"></div>
        </div>

        <div className="features1">
          <div className="ft-info-img ft-img2"></div>
          <div className="ft-info">
            <h3 className="ft-info-title">Note Taking</h3>
            <p className="ft-info-subtitle">
              Capture your thoughts and securely access them from any where. Go
              paperless with TMA.
            </p>
            <a href="#" className="ref-link">
              Read More...
            </a>
          </div>
        </div>

        <div className="features1">
          <div className="ft-info">
            <h3 className="ft-info-title">Pomodoro Timer</h3>
            <p className="ft-info-subtitle">
              Flexible and easy to use timer. Track time spent on tasks, stay
              focused, analyze data, and improve productivity.
            </p>

            <a href="#" className="ref-link">
              Read More...
            </a>
          </div>
          <div className="ft-info-img ft-img3"></div>
        </div>

        <div className="features1">
          <div className="ft-info-img ft-img4"></div>
          <div className="ft-info">
            <h3 className="ft-info-title">Historical Analysis</h3>
            <p className="ft-info-subtitle">
              Time spent on work every day/week/month and the time ratio of your
              work. Make time traceable.{" "}
            </p>
            <a href="#" className="ref-link">
              Read More...
            </a>
          </div>
        </div>
      </section>

      <section>
        <h1 style={{ fontSize: "64px", margin: "64px 0px" }}>
          <center>Ready to be more productive?</center>
        </h1>
        <center>
        <button
          className="main-btn"
          style={{ fontWeight: "700", padding: "12px 24px",margin:"0px 0px 64px 0px" }}
        >
          Get Started for Free
        </button>
        </center>
      </section>
      <footer style={{backgroundColor:"black", height: "40px", padding : "12px 0px"}}>
          <center style={{color:"white" , fontSize:"12px"}}>🚀<i>made by </i> AIET R19 BATCH-2 STUDENTS 🚀</center>
      </footer>
    </div>
  );
}
