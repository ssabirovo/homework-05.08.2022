import React, { Component } from "react";
import Issues from "./components/issues";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Issues />
      </div>
    );
  }
}

export default App;
