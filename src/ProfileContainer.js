import React, { Component } from "react";
import Profile from "./Profile";
import WarblerContainer from "./WarblerContainer";
import axios from "axios";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "mr waable",
        warblercount: 2
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="profile-container">
        <Profile
          username={this.state.user.username}
          warblercount={this.state.user.warblercount}
        />
        <WarblerContainer />
      </div>
    );
  }
}

export default ProfileContainer;
