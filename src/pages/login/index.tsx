import React, { Component } from "react";
import Inputs from "./Components/Inputs";
import "./index.scss";
class Login extends Component {
  private timer: any;
  state = {
    pageName: "登录1",
    timer: 0,
    step: 1
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timer: this.state.timer + this.state.step
      });
    }, 1000);
    this.setState({
      pageName: "hello"
    });
  }

  click = () => {
    console.log(11111);
    clearInterval(this.timer);
  };

  render() {
    const { timer } = this.state;
    return (
      <>
        <h1 className="login">{this.state.pageName}1</h1>
        <a>hello world</a>
        <Inputs />
        <h1>{timer}</h1>
        <button onClick={this.click}>reset</button>
      </>
    );
  }
}

export default Login;
