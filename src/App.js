import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WarblerContainer from "./WarblerContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WarblerContainer />
      </div>
    );
  }
}

export default App;
