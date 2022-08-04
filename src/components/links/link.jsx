import React, { Component } from "react";

import "./link.scss";

class Link extends Component {
  render() {
    const { onActive, isActive, linkIdx, title, icon, isOpened } = this.props;
    return (
      <div
        onClick={() => onActive(linkIdx)}
        className={`link ${isActive ? "linkActive" : ""} ${
          !isOpened ? "linkClosed " : ""
        }`}
      >
        {icon}
        {isOpened ? <p>{title}</p> : null}
      </div>
    );
  }
}

export default Link;
