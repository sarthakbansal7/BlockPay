import React, { useState } from "react";
import profilePicture from "../icons/profile.svg";
import projectManagerIcon from "../icons/projectmanager.svg";
import emailIcon from "../icons/email.svg";
import profileIcon from "../icons/profile.svg";
import attendanceIcon from "../icons/attendance.svg";
import projectsIcon from "../icons/project.svg";
import leaveIcon from "../icons/leave.svg";
import personalInfoIcon from "../icons/profileinfo.svg";
import professionalInfoIcon from "../icons/professionalinfo.svg";
import documentsIcon from "../icons/documents.svg";
import accountAccessIcon from "../icons/accountaccess.svg";
import Dp from "../icons/Dp.svg";
import Emp1 from "../icons/emp1.svg";
import Emp2 from "../icons/emp2.svg";
import Emp3 from "../icons/emp3.svg";
import Bitcoin from "../icons/Bit.svg";
import Avalanche from "../icons/avalanche.svg";
import Litcoin from "../icons/litecoin.svg";
import Polkadot from "../icons/polkadot.svg";
import Stellar from "../icons/stellar.svg";
import XPR from "../icons/xpr.svg";
import Arrow from "../icons/arrow.svg";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", value: 600 },
  { name: "June", value: 650 },
  { name: "July", value: 620 },
  { name: "Aug", value: 700 },
  { name: "Sep", value: 660 },
  { name: "Oct", value: 680 },
];

const employees = [
  {
    name: "Ricky Antony",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    position: "Senior",
    image: Emp1,
  },
  {
    name: "Ricky Antony",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    position: "Intern",
    image: Emp2,
  },
  {
    name: "Ricky Antony",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    position: "Senior",
    image: Emp3,
  },
  {
    name: "Ricky Antony",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    position: "Senior",
    image: Emp1,
  },
  {
    name: "Ricky Antony",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    position: "Intern",
    image: Emp2,
  },
  // ...add other employees
];

import settingsIcon from "../icons/settings.svg";
import notificationIcon from "../icons/notification.svg";
const MainContent = ({ logo, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "Brooklyn",
    LastName: "Simmons",
    Email: "brooklyn.s@example.com",
    MobileNumber: "(702) 555-0122",
    DateOfBirth: "July 14, 1995",
    Gender: "Female",
    MaritalStatus: "Married",
    Nationality: "America",
    Address: "2464 Royal Ln. Mesa, New Jersey",
    State: "California",
    ZipCode: "35624",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [activeTab, setActiveTab] = useState("personalInfo");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personalInfo":
        return (
          <div
            className={`info-rowUpdateE ${
              isEditing ? "editing-container" : ""
            }`}
          >
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="info-itemUpdateE">
                <span className="info-labelUpdateE">
                  {key.replace(/([A-Z])/g, " $1").trim()}:{" "}
                </span>
                {isEditing ? (
                  <div className="editable-form">
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="editing-input"
                    />
                  </div>
                ) : (
                  <span className="info-valueUpdateE">{value}</span>
                )}
              </div>
            ))}
          </div>
        );
      case "professionalInfo":
        return <div>Professional Information Content</div>;
      case "documents":
        return <div>Documents Content</div>;
      case "accountAccess":
        return <div>Account Access Content</div>;
      default:
        return null;
    }
  };
  return (
    <main className="main-content">
      <header className="main-header">
        <div className="logohome">BlockPay</div>
        <div className="user-profile">
          <img
            src={settingsIcon}
            alt="Settings"
            className="icon settings-icon"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="icon notification-icon"
          />
          <button>Logout</button>
          <div className="user-info">
            <span>Thomas Fleming</span>
            <span>info@gmail.com</span>
          </div>
        </div>
      </header>
      <div>
        <section className="dashboard-header">
          <h1>Finance Management</h1>

          <div className="breadcrumb">Home / Employee</div>
        </section>
      </div>
      <div className="Finance-ManagementFinance">
        <div className="Flexx">
          <div className="balance-sectionFinance">
            <div className="balance-headerFinance">
              <h2>Total Balance</h2>
              <button className="add-deposit-buttonFinance">Add Deposit</button>
            </div>
            <h1>$66,743.00</h1>
            <div className="balance-graphFinance">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart className="data" data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00aaff"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="withdraw-sectionFinance">
            <h2>Withdraw Funds</h2>
            <div className="withdraw-menuFinance">
              <button className="menu-buttonFinance">Wallet History</button>
              <button className="menu-buttonFinance activeFinance">
                Coin Wallet
              </button>
            </div>
            <table className="coin-wallet-tableFinance">
              <thead className="tablehead">
                <tr>
                  <th>Coin</th>
                  <th>Avbl. Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Repeat this block for each coin */}
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Bitcoin}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Bitcoin BTC</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Avalanche}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Avalanche AVAX</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Litcoin}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Litecoin LTC</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Polkadot}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Poldakot DOT</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Stellar}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Stellar XLM</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={XPR}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>XPR XPR</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                {/* Add similar rows for other coins */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="action-buttonsFinance">
          <div>
            <section className="employees-section">
              <div className="employees-header">
                <h2>Employees</h2>
              </div>
              <table className="employees-table">
                <thead className="table-header">
                  <tr>
                    <th>Employee Name</th>
                    <th>Email Address</th>
                    <th>Contact Number</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={employee.image}
                          alt="Employee"
                          className="employee-image"
                        />
                        {employee.name}
                      </td>
                      <td>{employee.email}</td>
                      <td>{employee.contact}</td>
                      <td>{employee.gender}</td>
                      <td>{employee.location}</td>
                      <td className={employee.position.toLowerCase()}>
                        {employee.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
          <div className="flexxx">
            <button className="PayButton">Pay all employees</button>
            <button className="PayButton">Pay selected employees</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
