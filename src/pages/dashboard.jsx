import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import ToggleZone from "../components/toggle-zone/toggle-zone";
import "./dashboard.scss";
import {
  analytics,
  dashboardIcon,
  inbox,
  messages,
  news,
  ordersIcons,
  schedules,
  settings,
} from "../components/icons/index";

export class Dashboard extends Component {
  state = {
    icons: [
      { title: "dashboardIcon", iconURL: dashboardIcon },
      { title: "ordersIcons", iconURL: ordersIcons },
      { title: "schedules", iconURL: schedules },
      { title: "messages", iconURL: messages },
      { title: "inbox", iconURL: inbox },
      { title: "analytics", iconURL: analytics },
      { title: "news", iconURL: news },
      { title: "settings", iconURL: settings },
    ],
  };
  render() {
    return (
      <div className="dashboard">
        <Sidebar icons={this.state.icons} />
        <ToggleZone />
      </div>
    );
  }
}

export default Dashboard;
