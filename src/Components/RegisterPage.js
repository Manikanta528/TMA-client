import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import bcrypt from "bcryptjs";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.password2 === ""
    ) {
      alert("Please fill in all the fields with valid data");
      return;
    }
    if (formData.password !== formData.password2) {
      alert("Passwords do not match");
      return;
    }
    bcrypt.hash(formData.password, 10).then((hashedPassword) => {
      //console.log(hashedPassword);
      const register = formData;
      register.password = hashedPassword;
      register.password2 = hashedPassword;
      //console.log(register);
      fetch("http://localhost:5001/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result === "ok") {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };
  function handleNav() {
    navigate("/login");
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Register</h1>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <br />
        <div>
          Already have an account,{" "}
          <span
            onClick={handleNav}
            style={{ cursor: "pointer", color: "#068932" }}
          >
            Login
          </span>{" "}
          here.
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
