import React from "react";
import "../styles/404.css";
import NavBar from "./NavBar";

const NotFound = () => (
  <>
    <NavBar/>
    <div className="not-found">
      <h1 className="not-found-header">404</h1>
      <p className="not-found-text">Oops! The page you're looking for can't be found.</p>
    </div>
  </>
);

export default NotFound;
