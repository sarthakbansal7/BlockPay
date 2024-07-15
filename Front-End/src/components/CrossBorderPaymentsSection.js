import React from "react";
import "../styles.css";
import Frame from "./images/Frame.png";

const CrossBorderPaymentsSection = () => {
  return (
    <section className="cross-border-payments-section">
      <h2>Instant Cross-Border Payments</h2>
      <div className="world-map">
        <img id="map-img" src={Frame} alt="World Map" />
      </div>
    </section>
  );
};

export default CrossBorderPaymentsSection;
