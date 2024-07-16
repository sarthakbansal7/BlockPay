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

const App = () => {
  return (
    <div className="apphome">
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
  );
};

export default App;
