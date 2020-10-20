import React from "react";
import HomePage from "./components/Home";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
