import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-container">
        <h1 className="nav-title">Waablr</h1>
      </div>
    );
  }
}

export default Nav;
