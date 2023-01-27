import React, { useState } from 'react';
import './LoginPage.css';


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            const response = await fetch('/login', {
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
                <div>Or Create an Account, <a href='./register'>Register</a> now.</div>
            </form>
        </div>
    );
};

export default LoginPage;
