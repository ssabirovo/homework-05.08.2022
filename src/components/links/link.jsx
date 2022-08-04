import React, { Component } from "react";
// import { ordersIcons } from "../icons";
import "./link.scss";

class Link extends Component {
  render() {
    // const {} = this.props;
    return (
      <div className="link">
        {this.props.icon}
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Link;
