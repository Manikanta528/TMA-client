
import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            // handle the response from the server
        } catch (err) {
            console.error(err);
        }
    };

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
                <div>Already have an account, <a href="./login">Login</a> here.</div>
            </form>
        </div>
    );
};

export default RegisterPage;
