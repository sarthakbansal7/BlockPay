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
const MainContent = ({ logo, children }) => {
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

          <div className="breadcrumb">Home / Dashboard</div>
        </section>
        <section className="summary-cards">
          <div className="card">
            <h2>Total Salary Deposit</h2>
            <img
              src={BlueDollar}
              alt="Blue Dollar Icon"
              className="card-icon"
            />
            <p>$1200.00</p>
            <div className="chart">
              <img src={BlueLine} alt="Blue Line Chart" />
            </div>
          </div>
          <div className="card">
            <h2>Total Bonus</h2>
            <img src={RedDollar} alt="Red Dollar Icon" className="card-icon" />
            <p>$120.00</p>
            <div className="chart">
              <img src={RedLine} alt="Red Line Chart" />
            </div>
          </div>
          <div className="card all-projects-card">
            <div className="all-projects-content">
              <img
                src={CircularGraph}
                alt="Circular Graph"
                className="circular-graph"
              />
              <div>
                <h2>All Projects</h2>
                <p>62 Complete</p>
                <div className="project-status">
                  <img
                    src={GreenBlock}
                    alt="Green Block Icon"
                    className="status-icon"
                  />
                  <span>Complete</span>
                </div>
                <div className="project-status">
                  <img
                    src={BlueBlock}
                    alt="Blue Block Icon"
                    className="status-icon"
                  />
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Total Deposit</h2>
            <img
              src={CheckList}
              alt="Check List Icons"
              className="card-icons"
            />
            <p>20</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${completionPercentage}%` }}
              >
                {completedTasks}/{totalTasks}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="main-overview">
        <div className="work-overview-bitcoin">
          <div className="header-bitcoin">
            <img
              src={bitcoinIcon}
              alt="Bitcoin"
              className="bitcoin-icon-bitcoin"
            />
            <h2>Bitcoin</h2>
            <h3>BTC</h3>
            <div className="currency-button-bitcoin">
              <button>Convert your currency</button>
            </div>
          </div>
          <div className="watchlist-bitcoin">
            <span id="rank">Rank #1</span>
            <span>Coin</span>
            <span>On 2,771,773 watchlists</span>
          </div>
          <div className="price-bitcoin">
            <h1>$43,975.72</h1>
            <span className="price-change-bitcoin">
              +2%{" "}
              <img src={upgreenarrow} alt="Bitcoin" className="icon-bitcoin" />
            </span>
            <span>Bitcoin Price (USD)</span>
          </div>
          <div className="high-low-price-bitcoin">
            <span>1L</span>
            <div className="price-range-bitcoin">
              <span>Low : $37,005.19</span>
              <span>High : $37,005.19</span>
            </div>
          </div>
          <div className="stats-bitcoin">
            <div>
              <h3 className="heading-stats">
                <img src={marketcap} alt="Bitcoin" className="icon-bitcoin" />
                Market Cap
                <br />
                <br />
                <br />
              </h3>
              <span>$826,445,951,378</span>
              <span className="price-change-bitcoin">
                <br />
                +2%
                <img
                  src={upgreenarrow}
                  alt="Bitcoin"
                  className="icon-bitcoin"
                />
              </span>
            </div>
            <div>
              <h3 className="heading-stats">
                <img src={fulldiluted} alt="Bitcoin" className="icon-bitcoin" />
                Full Diluted
                <br />
                <br />
                <br />
              </h3>
              <span>$915,435,574,336</span>
            </div>
            <div>
              <h3 className="heading-stats">
                <img src={v24volume} alt="Bitcoin" className="icon-bitcoin" />
                24 Volume
                <br />
                <br />
                <br />
              </h3>
              <span>$22,822,762,169</span>
              <span className="price-change-bitcoin">
                <br />
                +2%
                <img
                  src={upgreenarrow}
                  alt="Bitcoin"
                  className="icon-bitcoin"
                />
              </span>
            </div>
            <div>
              <h3 className="heading-stats">
                <img src={fulldiluted} alt="Bitcoin" className="icon-bitcoin" />
                Circulating Supply
                <br />
                <br />
                <br />
              </h3>
              <span>18,958,437.00 BTC</span>
              <span>Max supply 21,000,000</span>
            </div>
          </div>
        </div>
        {children}
      </section>
    </main>
  );
};

export default MainContent;
