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
    //     email: "hello@hello.com",
    //     username: "hello",
    //     name: "hello",
    //     password: "hello"
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
    // axios.get("http://localhost:3005/users/1").then(v => {
    //   let userWarblers = v.data.messages.map(w => {
    //     return {
    //       username: v.data.username,
    //       message: w.message
    //     };
    //   });
    //   let warblers = [...this.state.warblers, ...userWarblers];
    //   this.setState({
    //     warblers
    //   });
    // });

    axios
      .post("http://localhost:3005/users/auth", {
        username: "hello",
        password: "hello"
      })
      .then(v => {
        console.log(v);
      });

      // axios
      //   .post("http://localhost:3005/warblers/9", {
      //     message: "test5 msg5 "
      //   })
      //   .then(v => {
      //     console.log(v);
      //   });
    // }
    // axios.get("http://localhost:3005/warblers/1/1").then(v => {
    //   debugger
    //   console.log(v);
    // });
    // axios.get("http://localhost:3005/warblers/1").then(v => {
    //   console.log(v);
    // });
  }

  render() {
    let warblers = this.state.warblers.map(w => (
      <Warbler key={w.id} username={w.username} message={w.message} />
    ));

    return <div className="warbler-list">{warblers}</div>;
  }
}

export default WarblerContainer;
