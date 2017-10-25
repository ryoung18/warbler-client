import React, { Component } from "react";
import Warbler from "./Warbler";
import axios from "axios";

class WarblerContainer extends Component {
  constructor(props) {
    super(props);
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
    return <h1>waablr</h1>;
  }
}

export default WarblerContainer;
