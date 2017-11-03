import React, { Component } from "react";
import RoundButton from "./RoundButton";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundButton : [
        {
          btnName: 'Sign up ',
          url: 'http://www.google.com'
        },
        {
          btnName: 'Log in',
          url: 'http://www.google.com'
        }
      ]
    }
  }

  render() {
    const roundButton = this.state.roundButton.map((b,i) =>(
      <RoundButton
      btnName={b.btnName}
      url={b.url}
      key={i} />)
    );

    return (
      <div className="nav-container">
        <div className="center">
          <div className="nav-top">
            <div className="nav-half">
              <img className="icon" src="https://freeclipartimage.com//storage/upload/duck-clipart/duck-clipart-14.png" />
            </div>
            <div className="nav-half nav-right">
              {roundButton}
            </div>
          </div>
          <div className="nav-title">
            Warbler
          </div>
        </div>
          <div className="nav-cat-btns">
            <div className="center">
              <a href="#">Search</a>
              <a href="#">All</a>
              <a href="#">Kevin</a>
              <a href="#">Jon</a>
              <a href="#">Me</a>
              <a href="#">Pikachu</a>
            </div>
          </div>
      </div>
    );
  }
}
export default Nav;
