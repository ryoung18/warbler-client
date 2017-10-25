import React, { Component } from "react";
import Warbler from "./Warbler";
import axios from "axios";

class WarblerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warblers: []
    };
  }

  componentDidMount() {
    // axios
    //   .post("http://localhost:3005/users", {
    //     email: "test@warbler.com",
    //     username: "test",
    //     name: "Test 1",
    //     password: "warbler"
    //   })
    //   .then(v => {
    //     console.log(v);
    //   });

    //   axios
    //     .post("http://localhost:3005/warblers/1", {
    //       message: "test msg"
    //     })
    //     .then(v => {
    //       console.log(v);
    //     });
    // }
    axios.get("http://localhost:3005/warblers/1/1").then(v => {
      console.log(v);
    });
  }

  render() {
    let warblers = this.state.warblers.map(w => (
      <Warbler key={w.id} username={w.username} message={w.message} />
    ));

    return (
      <div className="warbler-list">
        <Warbler />
      </div>
    );
  }
}

export default WarblerContainer;
