import React, { Component } from "react";
import { searchIcon } from "../icons/index";
import "./search.scss";

class Search extends Component {
  render() {
    return (
      <div className="search">
        {searchIcon}
        {this.props.isOpened ? <input type="text" value="Search" /> : null}
      </div>
    );
  }
}

export default Search;
