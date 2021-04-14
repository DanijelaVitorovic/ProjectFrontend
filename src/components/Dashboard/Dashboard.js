import React, { Component } from "react";
import style from "./style.css";
import { DashboardTranslation } from "../../translations";

class Dashboard extends Component {
  render() {
    const translation = DashboardTranslation || {};
    const { DashboardItems } = translation;

    return (
      <div className="wrapper">
        <div className="title">
          <h1 class="text-center">{DashboardItems.welcomeTitle}</h1>
          <p class="text-center">{DashboardItems.welcomeParagraph}</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
