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
import EmployeeDashboard from "./employee_dashboard";
import Login from "./login";
import Register from "./RegisterCompany";
import AdminEmployeeSection from "./admin_employee_section";
import FinanceDashboard from "./FinanceManagement";

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
        <Route path="/hr-dashboard" element={<HrDashboard />} />
        <Route
          path="/admin-employee-section"
          element={<AdminEmployeeSection />}
        />
        <Route path="/finance-dashboard" element={<FinanceDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
