import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">BlockPay</div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#updates">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="auth-links">
        <a href="#signin">Sign In</a>
        <a href="#register" className="register-btn">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
