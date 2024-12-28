// src/pages/Signup/Signup.jsx
import React, { useState } from 'react';
import './Signup.css'; // Import your styles here

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle Login logic
      console.log('Login Data:', { email: formData.email, password: formData.password });
    } else {
      // Handle Signup logic
      console.log('Signup Data:', formData);
    }
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" onChange={handleToggle} />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            {isLogin ? (
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" onSubmit={handleSubmit}>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button className="flip-card__btn">Let’s go!</button>
                </form>
              </div>
            ) : (
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" onSubmit={handleSubmit}>
                  <input
                    className="flip-card__input"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Signup;
