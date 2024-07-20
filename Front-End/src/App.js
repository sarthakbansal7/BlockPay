import React from "react";
import "./styles.css";
import Header from "./components/Headerhome";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import ReformSection from "./components/ReformSection";
import FeaturesSection from "./components/FeaturesSection";
import CrossBorderPaymentsSection from "./components/CrossBorderPaymentsSection";
import ReadyToGetStartedSection from "./components/ReadyToGetStartedSection";
import FAQsSection from "./components/FAQsSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HrDashboard from "./hr_onboard";

const App = () => {
  return (
    <div className="apphome">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <HeroSection />
              <VideoSection />
              <ReformSection />
              <FeaturesSection />
              <CrossBorderPaymentsSection />
              <ReadyToGetStartedSection />
              <FAQsSection />
              <Footer />
            </div>
          }
        />
        <Route path="/dashboard" element={<HrDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
