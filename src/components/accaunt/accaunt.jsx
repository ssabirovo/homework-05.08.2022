import React, { Component } from "react";
import avatarImg from "../../assets/images/image 1.svg";
import { logout } from "../icons";
import "./accaunt.scss";

class Accaunt extends Component {
  render() {
    return (
      <div className="accaunt">
        <div className="accauntImg">
          <img src={avatarImg} alt="not-found" />
        </div>
        <div className="accauntInfo">
          <h2>Richard</h2>
          <p>9394lay@gmail.com</p>
        </div>
        <div className="loguot">{logout}</div>
      </div>
    );
  }
}

export default Accaunt;
