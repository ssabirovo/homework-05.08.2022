import React, { Component } from "react";
import { getIssues } from "./utils/get-issues";
import Issue from "./issue";

export class Issues extends Component {
  render() {
    return (
      <div className="issues">
<<<<<<< HEAD
        {getIssues(15).map((issue, idx) => (
=======
        {getIssues(50).map((issue, idx) => (
>>>>>>> origin
          <Issue issues={issue} key={issue.id} />
        ))}
      </div>
    );
  }
}

export default Issues;
