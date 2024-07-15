import React from "react";
import "../styles.css";
import earth from "./images/earth.png";

const HeroSection = () => {
  return (
    <div className="Herobaby">
      <div className="hero-section">
        <h1>INFINITE PAY POSSIBILITIES</h1>
        <h2>with Blockchain Precision</h2>
        <p>
          Simplify your payroll process with our decentralized solution. Enjoy
          real-time transactions, immutable records, and effortless compliance,
          all while empowering your workforce with transparent and timely
          payments.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="globe-div">
        <img className="globe" src={earth} alt="Earth" />
      </div>
    </div>
  );
};

export default HeroSection;
