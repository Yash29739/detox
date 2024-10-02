import React, { useState } from 'react';
import './LogIn.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LogIn = () => {
  const [action, setAction] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });

  // Toggle between login and signup form
  const registerLink = () => setAction('active');
  const logInLink = () => setAction('');

  // Handle login form input changes
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle signup form input changes
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    console.log("Entered the function")

    try {
      const response = await fetch("https://digital-detox-y73b.onrender.com/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);
        // Handle successful login (e.g., redirect to dashboard or store token)
        alert('Login successful')
      } else {
        console.error("Login error:", result.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Handle signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://digital-detox-y73b.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(signupData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Signup successful:", result);
        // Handle successful signup (e.g., redirect to login or dashboard)
        alert('SignUp successful')
      } else {
        console.error("Signup error:", result.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <div className={`wrapper ${action}`}>
        {/* Login Form */}
        <div className="form-box logIn">
          <form onSubmit={handleLoginSubmit}>
            <h1>LogIn</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">LogIn</button>
            <div className="register-link">
              <p>Don't have an Account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>

        {/* Signup Form */}
        <div className="form-box register">
          <form onSubmit={handleSignupSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={handleSignupChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> I agree to the terms & conditions</label>
            </div>
            <button type="submit">SignUp</button>
            <div className="register-link">
              <p>Have an Account Already? <a href="#" onClick={logInLink}>Log-In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;