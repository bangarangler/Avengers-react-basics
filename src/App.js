import React, { Component } from "react";
import "./App.module.scss";

import { Route, Link } from "react-router-dom";

import avengers from "./data.js";
import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import AvengerPage from "./components/AvengerPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/avengers">Avengers</Link>
            </li>
          </nav>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/avengers"
          render={props => (
            <AvengersList {...props} avengers={this.state.avengers} />
          )}
        />
        <Route
          path="/avengers/:id"
          render={props => (
            <AvengerPage {...props} avengers={this.state.avengers} />
          )}
        />
      </div>
    );
  }
}

export default App;
