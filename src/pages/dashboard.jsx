import React, { Component } from "react";
import data from "../data.js";
import Sidebar from "../components/sidebar/sidebar";
import ToggleZone from "../components/toggle-zone/toggle-zone";
import "./dashboard.scss";

export class Dashboard extends Component {
  state = {
    icons: data,
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
    console.log(icons)
    return (
      <div className="dashboard">
        <Sidebar
          isOpened={sidebarOpened}
          icons={icons}
          onActive={this.handleActive}
        />
        <ToggleZone
          isOpened={sidebarOpened}
          onToggle={this.handleToggle}
          title={toggleZoneTitle}
        />
      </div>
    );
  }
}

export default Dashboard;
