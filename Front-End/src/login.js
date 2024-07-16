/*import React, { useState } from "react";
import "./login.css";
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
        <h1>Login As An Employee</h1>
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

          <div>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </div>

          <div>
            <p>
              Don't have an account?{" "}
              <button className="SignIn-btn">Sign Up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
*/

import React, { useState } from "react";
import "./login.css";
import myVector from "./Vector.svg";

const RegisterCompany = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userRole, setUserRole] = useState("Employee");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
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
        <h1>Login As An {userRole}</h1>
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

          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="Employer"
                checked={userRole === "Employer"}
                onChange={handleRoleChange}
                className="role-radio"
              />
              Employer
            </label>
            <label>
              <input
                type="radio"
                value="Employee"
                checked={userRole === "Employee"}
                onChange={handleRoleChange}
                className="role-radio"
              />
              Employee
            </label>
          </div>

          <div>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </div>

          <div>
            <p>
              Don't have an account?{" "}
              <button className="SignIn-btn">Sign Up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
