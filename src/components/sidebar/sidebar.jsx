import React, { Component } from "react";
import Link from "../links/link";
import Logo from "../logo/logo";
import Search from "../search/search";
import "./sidebar.scss";

export class Sidebar extends Component {
  render() {
    console.log(this.props.icons);
    return (
      <div className="sidebar">
        <div className="sidebar_assets">
          <Logo />
          <Search />
          {this.props.icons.map((icon) => (
            <Link icon={icon.iconURL} title={icon.title} />
          ))}
        </div>
        <div></div>
      </div>
    );
  }
}

export default Sidebar;
