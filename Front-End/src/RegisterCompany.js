import React, { useState } from "react";
import "./RegisterCompany.css";
import myVector from "./Vector.svg";

const RegisterCompany = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="app-container light-mode">
      <img
        src={myVector}
        alt="background vector"
        className="background-vector"
      />
      <div className="top-bar">
        <div className="brand">BlockPay</div>
      </div>
      <div className="register-container">
        <h1>Register Your Company</h1>
        <form className="register-form">
          <input
            type="text"
            className="form-input"
            placeholder="Enter company name"
            name="companyName"
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="username"
            name="companyName"
            required
          />

          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-input"
              placeholder="Password"
              name="password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="toggle-visibility"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="form-input"
              placeholder="Re-password"
              name="confirmPassword"
              required
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="toggle-visibility"
            >
              {confirmPasswordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>

          <div>
            <p>
              Already have an account?{" "}
              <button className="SignIn-btn">Sign In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
