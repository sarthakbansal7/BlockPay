import React from "react";
import bitcoinIcon from "../icons/Bitcoin.svg";
import BlueDollar from "../icons/blue-dollar.svg";
import RedDollar from "../icons/red-dollar.svg";
import CheckList from "../icons/check-list.svg";
import CircularGraph from "../icons/circular-graph.svg";
import RedLine from "../icons/red-line.svg";
import BlueLine from "../icons/blue-line.svg";
import GreenBlock from "../icons/green-block.svg";
import BlueBlock from "../icons/blue-block.svg";
import settingsIcon from "../icons/settings.svg";
import star from "../icons/Star.svg";
import marketcap from "../icons/marketcap.svg";
import fulldiluted from "../icons/fulldiluted.svg";
import v24volume from "../icons/24volume.svg";
import upgreenarrow from "../icons/upgreenarrow.svg";
import downredarrow from "../icons/downredarrow.svg";
import notificationIcon from "../icons/notification.svg";
const Content = ({ logo, children, name }) => {
  const totalTasks = 28;
  const completedTasks = 20;
  const completionPercentage = (completedTasks / totalTasks) * 100;
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
          <h1>Dashboard</h1>

          <div className="breadcrumb">Home / {name} </div>
        </section>
        </div>
        {children}
    </main>
  );
};

export default Content;
