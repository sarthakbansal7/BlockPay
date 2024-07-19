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
import Countries from "../icons/countries.png";
import Map from "../icons/map.png";
import Emp1 from "../icons/emp1.svg";
import Emp2 from "../icons/emp2.svg";
import Emp3 from "../icons/emp3.svg";

import settingsIcon from "../icons/settings.svg";
import notificationIcon from "../icons/notification.svg";

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

const MainContent = ({ logo, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

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
          <h1>Employees</h1>

          <div className="breadcrumb">Home / Employees</div>
        </section>
      </div>

      <section className="employees-section">
        <div className="employees-header">
          <h2>Employees</h2>
          <div className="employees-buttons">
            <button className="update-employee-btn">Update Employee</button>
            <button className="add-employee-btn">+ Add Employee</button>
          </div>
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

      <div className="images">
        <img className="mapImage" src={Map} alt="" />
        <img className="countriesImage" src={Countries} alt="" />
      </div>
    </main>
  );
};
export default MainContent;
