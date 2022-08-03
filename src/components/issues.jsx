import React, { Component } from "react";
import { getIssues } from "./utils/get-issues";
import Issue from "./issue";
import FilterBtns from "./filterBtns";
import "./issues.scss";
export class Issues extends Component {
  state = {
    finished: getIssues().filter((issue) => (issue.isFinished = true)),
    //buni muhiddin almashtirdi "notdone"ga uzgartirdim shu joyo qolsin iltimos
    notdone: getIssues().filter((issue) => issue.isFinished === false),
    renderArray: getIssues(),
    btnsArray: ["All", "Finished", "OnProgress"],
  };

  handeleFilter = (type) => {
    if (type === "OnProgress") {
      this.setState({ renderArray: this.state.notdone });
    }
    if (type === "Finished") {
      this.setState({ renderArray: this.state.finished });
    }
    if (type === "All") {
      this.setState({ renderArray: getIssues() });
    }
  };

  render() {
    return (
      <div className="issues">
        <FilterBtns onfilter={this.handeleFilter} btns={this.state.btnsArray} />
        {this.state.renderArray.map((issue) => (
          <Issue issue={issue} key={issue.id} />
        ))}
      </div>
    );
  }
}

export default Issues;
