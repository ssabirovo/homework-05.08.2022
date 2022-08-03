import React, { Component } from "react";

export class FilterBtns extends Component {
    render() {
    return (
      <div>
        {this.props.btns.map((btn) => (
          <button onClick={() => this.props.onfilter(btn)}> {btn} </button>
        ))}
      </div>
    );
  }
}

export default FilterBtns;
