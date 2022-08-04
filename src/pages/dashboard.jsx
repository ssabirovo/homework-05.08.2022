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
      { isActive: true, title: "Dashboard", iconURL: dashboardIcon },
      { isActive: false, title: "Orders", iconURL: ordersIcons },
      { isActive: false, title: "Schedules", iconURL: schedules },
      { isActive: false, title: "Messages", iconURL: messages },
      { isActive: false, title: "Inbox", iconURL: inbox },
      { isActive: false, title: "Analytics", iconURL: analytics },
      { isActive: false, title: "News", iconURL: news },
      { isActive: false, title: "Settings", iconURL: settings },
    ],
    toggleZoneTitle: "Dashboard",
    sidebarOpened: true,
  };
  handleActive = (iconIdx) => {
    let temp = this.state.icons;
    temp.map((item) => (item.isActive = false));
    temp[iconIdx].isActive = true;
    this.setState({ icons: temp, toggleZoneTitle: temp[iconIdx].title });
  };
  handleToggle = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  render() {
    const { sidebarOpened, icons, toggleZoneTitle } = this.state;
    return (
      <div className="dashboard">
        <Sidebar
          isOpened={sidebarOpened}
          icons={icons}
          onActive={this.handleActive}
        />
        <ToggleZone isOpened={sidebarOpened} onToggle={this.handleToggle} title={toggleZoneTitle} />
      </div>
    );
  }
}

export default Dashboard;
