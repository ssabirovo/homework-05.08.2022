import React, { Component } from "react";
import { searchIcon } from "../icons/index";
import "./search.scss";

class Search extends Component {
  render() {
    return (
      <div className="search">
            {searchIcon}
            <input type="text" value="Search"/>
      </div>
    );
  }
}

export default Search;
