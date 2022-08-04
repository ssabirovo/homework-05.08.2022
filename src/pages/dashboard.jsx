import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Link from "../components/links/link";
// import Search from "../components/search/search";
import Button from "../components/toggle-zone/button";

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
