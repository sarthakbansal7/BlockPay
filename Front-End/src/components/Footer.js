import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">BlockPay</div>
      <nav>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#updates">Contact</a>
      </nav>
      <div className="socials">
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
