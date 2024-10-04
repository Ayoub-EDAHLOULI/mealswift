"use client";

import React from "react";
import { useState } from "react";
import "./DriverDashboard.scss";
import DashboardTab from "./(Tabs)/DashboardTab/DashboardTab";
import ShortBackground from "../ShortBackground/ShortBackground";

function DriverDashboard() {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <>
      <ShortBackground
        title="Delivery Driver Dashboard"
        background="/images/hero_delivery.jpg"
      />
      <section className="driver-dashboard">
        <div className="driver-dashboard__container">
          <aside className="driver-dashboard__sidebar">
            <div className="driver-dashboard__sidebar__items">
              <ul>
                <li
                  onClick={() => handleTabChange("Dashboard")}
                  className={activeTab === "Dashboard" ? "active" : ""}
                >
                  Dashboard
                </li>
              </ul>
            </div>
          </aside>
          <main className="driver-dashboard__content">{renderContent()}</main>
        </div>
      </section>
    </>
  );
}

export default DriverDashboard;
