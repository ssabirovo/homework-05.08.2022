import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/base.scss";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import data from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      {data.map((item) => (
        <Route
          path={item.path}
          render={(props) => (
            <Dashboard defaultProps={props} activeComponent={item.title} />
          )}
        />
      ))}
    </Switch>
  </BrowserRouter>
);
