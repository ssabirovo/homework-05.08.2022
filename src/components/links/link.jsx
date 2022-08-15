import React, { Component } from "react";

import "./link.scss";

class Linkcha extends Component {
  render() {
    const {
      onActive,
      isActive,
      linkIdx,
      title,
      icon,
      isOpened,
      children,
      defaultProps,
      path,
    } = this.props;
    console.log("defaultProps ", defaultProps);
    return (
      <>
        <div
          onClick={() => defaultProps.history.push(path)}
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

export default Linkcha;
