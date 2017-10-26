import React, { Component } from "react";
import Profile from "./Profile";
import ProfileContainer from "./ProfileContainer";
import SignUpForm from "./SignUpForm";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(user) {
    axios.post("http://localhost:3005/users", { ...user }).then(v => {
      //do some stuff
    });
  }

  render() {
    return (
      <div className="home-container">
        <ProfileContainer />
        <SignUpForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Home;
