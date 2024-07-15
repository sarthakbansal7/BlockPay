import React from "react";
import "../styles.css";
import Ellipse from "./images/Ellipse.png";
import EllipseR from "./images/EllipseR.png";

const ReformSection = () => {
  return (
    <section className="reform-section">
      <h2>Reforming Your Current Payroll System Is Literally This Easy</h2>
      <p>Everything you need right in your hands</p>
      <div className="steps">
        <div className="step">Step 1</div>
        <div className="connector">
          <img src={Ellipse} alt="Connector" />
        </div>
        <div className="step">Step 2</div>
        <div className="connectorR">
          <img src={EllipseR} alt="ConnectorR" />
        </div>
        <div className="step">Step 3</div>
        <div className="connector">
          <img src={Ellipse} alt="Connector" />
        </div>
        <div className="step">Step 4</div>
      </div>
    </section>
  );
};

export default ReformSection;
