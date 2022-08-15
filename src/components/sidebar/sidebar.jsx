import React, { Component } from "react";
import Accaunt from "../accaunt/accaunt";
import Link from "../links/link";
import Logo from "../logo/logo";
import Search from "../search/search";
import "./sidebar.scss";

// 
export class Sidebar extends Component {
  render() {
    const { icons, onActive, isOpened } = this.props;
    return (
      <div className="sidebar ">
        <div className="sidebar_assets ">
          <Logo isOpened={isOpened} />
          <Search isOpened={isOpened} />
          {icons.map((icon, idx) => (
            <Link
              isOpened={isOpened}
              onActive={onActive}
              isActive={icon.isActive}
              key={idx}
              linkIdx={idx}
              icon={icon.iconURL}
              title={icon.title}
            />
          ))}
        </div>
        <Accaunt isOpened={isOpened} />
      </div>
    );
  }
}

export default Sidebar;
