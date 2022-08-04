import React, { Component } from "react";
import Logo from "../logo/logo";
import Search from "../search/search";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Search />
      </div>
    );
  }
}

export default Sidebar;
