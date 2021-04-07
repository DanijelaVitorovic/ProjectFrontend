import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import ReactDOM from 'react-dom';

class Dashboard extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="text-center">Добродошли</h1>
        <p class="text-center">ДМС пракса</p>
      </div>
    );
  }
}

export default Dashboard;
