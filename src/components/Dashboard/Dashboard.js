import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <a href="/addUser">Dodaj korisnika</a>
        <br />
        <a href="/userList">Lista korisnika</a>
      </div>
    );
  }
}

export default Dashboard;
