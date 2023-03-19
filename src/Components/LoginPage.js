import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleIncorrect = () => {
    setFormData({
      ...formData,
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Please enter your credentials");
      return;
    }
    fetch("http://localhost:5001/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.err === "user not found") {
          alert(data.err);
          window.location.reload();
        } else if (data.err === "wrong password") {
          alert(data.err);
          handleIncorrect();
        }
        if (data.login === "success") {
          localStorage.setItem("email", formData.email);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleNav() {
    navigate("/register");
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <br />
        <div>
          Or Create an Account,{" "}
          <span
            onClick={handleNav}
            style={{ cursor: "pointer", color: "#068932" }}
          >
            Register
          </span>{" "}
          now.
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
