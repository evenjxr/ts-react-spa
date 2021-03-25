import React, { Component } from "react";
import styled from "./input.css";

class Inputs extends Component {
  render() {
    return <input name="account" className={styled.input}></input>;
  }
}

export default Inputs;
