import React from "react";

const Header = () => {
  return (
    <headerhome>
      <div className="logohome">BlockPay</div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#updates">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="auth-linkshome">
        <a href="#signin">Sign In</a>
        <a href="#registerhome" className="register-btnhome">
          Register
        </a>
      </div>
    </headerhome>
  );
};

export default Header;
