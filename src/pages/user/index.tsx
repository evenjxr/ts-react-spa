import React, { Component } from "react";
class User extends Component {
  state = {
    pageName: "用户"
  };

  render() {
    return <h1>{this.state.pageName}</h1>;
  }
}

export default User;
