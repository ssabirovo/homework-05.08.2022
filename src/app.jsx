import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import data from "./data";
import Dashboard from "./pages/dashboard";
export class App extends Component {
  render() {
    return (
      <Switch>
        {data.map((item) => (
          <Route
            path={item.path}
            render={(props) => (
              <Dashboard defaultProps={props} activeComponent={item.title} />

              //adafafafafaf
            )}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
