import React, { Component } from "react";
import { getIssues } from "./utils/get-issues";
import Issue from "./issue";
import FilterBtns from "./filterBtns";

export class Issues extends Component {
  state = {
    finished: getIssues().filter((issue) => issue.isFinished === true),
    done: getIssues().filter((issue) => issue.isFinished === false),
    renderArray: getIssues(),
    btnsArray: ["all", "finished", "onProgress"],
  };

  handeleFilter = (type) => {
    if (type === "onProgress") {
      this.setState({ renderArray: this.state.done });
    }
    if (type === "finished") {
      this.setState({ renderArray: this.state.finished });
    }
    if (type === "all") {
      this.setState({ renderArray: getIssues() });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="issues">
        <FilterBtns onfilter={this.handeleFilter} btns={this.state.btnsArray} />
        {this.state.renderArray.map((issue, idx) => (
          <Issue issues={issue} key={issue.id} />
        ))}
      </div>
    );
  }
}

export default Issues;
