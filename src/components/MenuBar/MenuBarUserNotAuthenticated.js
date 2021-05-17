import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menus} from '../../translations';

class MenuBarUserNotAuthenticated extends Component {
  render() {
    const translation = Menus || {};
    const {UserNotAuthenticatedMenuBar} = translation;

    return (
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link to="/register" class="nav-link ">
            {UserNotAuthenticatedMenuBar.registration}
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link ">
            {UserNotAuthenticatedMenuBar.login}
          </Link>
        </li>
      </ul>
    );
  }
}
export default MenuBarUserNotAuthenticated;
