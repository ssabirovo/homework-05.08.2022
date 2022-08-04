import React, { Component } from "react";
import Link from "../components/links/link";
// import Search from "../components/search/search";
import Button from "../components/toggle-zone/button";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link />
        <Button />
      </div>
    );
  }
}

export default Dashboard;
