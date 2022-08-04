import React, { Component } from "react";
import { logo } from "../icons/index";
import "./logo.scss";

class Logo extends Component {
  render() {
    return <div className="logo">{logo}
    <h1>MingCute</h1></div>;
  }
}

export default Logo;
