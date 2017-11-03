import React, { Component } from "react";
import "./RoundButton.css";

const RoundButton = props => (
  <button class="round-btn"> {props.btnName}</button>
);

export default RoundButton;
