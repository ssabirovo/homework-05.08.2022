import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/base.scss";
import Dashboard from "./pages/dashboard";
import Search from "./components/search/search";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
        <Dashboard />
        <Search />
  </div>
);
