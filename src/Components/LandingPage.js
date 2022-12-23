import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai"

export default function LandingPage(){
    return(
        <div className="landing-page">
            <nav className="nav-bar">
                <h3 style={{fontWeight: "700"}}> TMA </h3>
                <div className="cta-btns">
                    <button className="secondary-btn">Log in</button>
                    <button className="main-btn">Sign Up</button>
                </div>
            </nav>
            <main className="main-section">
            <h1 
            style={{ fontSize : "64px"}}>
                <center>Organize your life and Manage
                    <br/> your work with TMA
                </center>
            </h1>
            <p 
            style={{ fontSize : "20px" , fontWeight : "200", margin : "40px 0px 64px 0px"}}>
                <center>It's time to have fun when you get things done! Join over TMA and <br/> improve your life one task at a time.</center>
            </p>
            <button 
            className="main-btn" 
            style={{fontWeight: "700", padding: "12px 24px"}}>
                Sign Up Now
            </button>
            <div className="scroll">
                <div>
                    <AiOutlineArrowDown className="down-arrow"/> 
                    <span className="scroll-text" style={{color: "#068932"}}>Know more</span>
                    <AiOutlineArrowDown className="down-arrow"/>
                </div>
            </div>
            </main>
        </div>
    );
}