import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/Home";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="side-bar">
          <Sidebar />
        </div>

        <div className="content">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
