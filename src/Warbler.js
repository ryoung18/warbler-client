import React, { Component } from "react";
import "./Warbler.css";

class Warbler extends Component {
  render() {
    const { name, handle, img, logo, message, time } = this.props;
    return (
      <div className="warbler-container">

        <div className="warbler-vid-img">
          <img src={img}/>
        </div>

        <div className="desc">
          <div className="account">
            <div className="user-image">
              <img src="https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg" />
            </div>
            <div className="name">
              <span className="warbler-name"> {name} </span>
              <span className="warbler-handle"> {handle} </span>
            </div>
            <div className="time">
              {time}
            </div>
          </div>
          <div className="message">
            {message}
          </div>
          <div className="warbler-footer">
              <span className="action-btn"> &#128172; </span>
              <span className="action-btn"> &#8645; </span>
              <span className="action-btn"> &#9825; </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Warbler;
