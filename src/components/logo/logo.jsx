import React, { Component } from "react";
import { logo } from "../icons/index";
import "./logo.scss";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {logo}
        {this.props.isOpened ? <h1>MingCute</h1> : null}
      </div>
    );
  }
}

export default Logo;
