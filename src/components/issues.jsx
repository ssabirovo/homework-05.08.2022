import React, { Component } from "react";
import { getIssues } from "./utils/get-issues";
import Issue from "./issue";

export class Issues extends Component {
  render() {
    return (
      <div className="issues">
        {getIssues(15).map((issue, idx) => (
          <Issue issues={issue} key={issue.id} />
        ))}
      </div>
    );
  }
}

export default Issues;
