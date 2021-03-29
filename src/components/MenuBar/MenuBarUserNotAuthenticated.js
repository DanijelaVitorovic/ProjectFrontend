import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuBarUserNotAuthenticated extends Component {
  render() {
    return (
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link to="/register" class="nav-link ">
            Registracija
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link ">
            Prijava
          </Link>
        </li>
      </ul>
    );
  }
}
export default MenuBarUserNotAuthenticated;
