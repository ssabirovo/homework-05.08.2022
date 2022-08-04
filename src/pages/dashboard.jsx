import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
      </div>
    );
  }
}

export default Dashboard;
