import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import authorizationService from "../../securityUtils/authorizationService";
import MenuBarUsers from "../MenuBar/MenuBarUsers";
import MenuBarUserNotAuthenticated from "../MenuBar/MenuBarUserNotAuthenticated";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { validToken, loggedUser } = this.props.loggedUser;

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {authorizationService.canAccessAdminPanel(loggedUser) ? (
          <MenuBarUsers />
        ) : null}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link ">
              {loggedUser.firstName} {loggedUser.lastName}
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/logout"
              className="nav-link "
              onClick={this.logout.bind(this)}
            >
              Odjava
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = <MenuBarUserNotAuthenticated />;

    let headerLinks;

    if (validToken && loggedUser) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark mb-4">
          <Link className="navbar-brand" to="/">
            APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {headerLinks}
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
  error: state.errors
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
