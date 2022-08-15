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

  componentDidMount = () => {
    this.handleActive();
  };

  handleActive = () => {
    let temp = this.state.icons;
    temp.map((item) =>
      item.title === this.props.activeComponent
        ? (item.isActive = true)
        : (item.isActive = false)
    );
    this.setState({ icons: temp });
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
          defaultProps={this.props.defaultProps}
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
