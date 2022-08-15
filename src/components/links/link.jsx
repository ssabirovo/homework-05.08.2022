import React, { Component } from "react";

import "./link.scss";

class Link extends Component {
  render() {
    const { onActive, isActive, linkIdx, title, icon, isOpened, children } =
      this.props;

    return (
      <>
        <div
          onClick={() => onActive(linkIdx)}
          className={`link ${isActive ? "linkActive" : ""} ${
            !isOpened ? "linkClosed " : ""
          }`}
        >
          {icon}
          {isOpened ? <p>{title}</p> : null}
        </div>
        {isActive && children
          ? children.map((child) => (
              <div style={{ color: "#fff" }}>{child.title}</div>
            ))
          : null}
      </>
    );
  }
}

export default Link;
