import React, { Component } from "react";

export class FilterBtns extends Component {
  render() {
    return (
      <div className="filtered-btns">
        {this.props.btns.map((btn, idx) => (
          <button
            key={idx}
            className={btn}
            onClick={() => this.props.onfilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

export default FilterBtns;
