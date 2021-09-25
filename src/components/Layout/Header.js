import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../actions/securityActions'
import authorizationService from '../../securityUtils/authorizationService'
import MenuBarUsers from '../MenuBar/MenuBarUsers'
import MenuBarUserNotAuthenticated from '../MenuBar/MenuBarUserNotAuthenticated'
import { Navbar } from 'react-bootstrap'
import { HeaderTranslation } from '../../translations'
import Tooltip from '@material-ui/core/Tooltip'
import Switch from '@material-ui/core/Switch'
import { Fragment } from 'react'
import { blue } from '@material-ui/core/colors'
import '../Layout/Header'
import i18next from 'i18next'

class Header extends Component {
  logout() {
    this.props.logout()
    window.location.href = '/'
  }

  onChange(option) {
    localStorage.setItem('lang', option.target.value)
    window.location.reload()
  }

  render() {
    const lang = localStorage.getItem('lang') || 'sr'
    const { validToken, loggedUser } = this.props.loggedUser
    let translation
    translation = HeaderTranslation

    const { HeaderItems } = translation

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {authorizationService.canAccessAdminPanel(loggedUser) ? (
          <MenuBarUsers />
        ) : null}
        <ul className="navbar-nav ml-auto">
          <br></br>
          <Tooltip title="Промени тему" arrow>
            <Switch
              checked={this.props.darkMode}
              onChange={this.props.handleDarkMode}
            />
          </Tooltip>{' '}
          <select
            style={{ width: 100, height: 40, marginRight: 20, marginLeft: 10 }}
            className="custom-select pull-right"
            onChange={this.onChange}
            value={lang}
          >
            <option value="sr">Srb</option>
            <option value="en">Eng</option>
          </select>
          <li
            className="nav-item"
            style={{
              marginRight: 50,
            }}
          >
            <Link
              to="/dashboard"
              className="nav-link "
              style={{ textTransform: 'uppercase' }}
            >
              {loggedUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className="nav-link "
              onClick={this.logout.bind(this)}
            >
              {HeaderItems.logout}
            </Link>
          </li>
        </ul>
      </div>
    )

    const userIsNotAuthenticated = <MenuBarUserNotAuthenticated />

    let headerLinks

    if (validToken && loggedUser) {
      headerLinks = userIsAuthenticated
    } else {
      headerLinks = userIsNotAuthenticated
    }

    return (
      <div>
        {!this.props.darkMode && (
          <nav className="navbar navbar-expand-lg navbar-dark mb-4 lightNavbar">
            <Navbar.Toggle />
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
        )}
        {this.props.darkMode && (
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Navbar.Toggle />

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
            <div className="container mb-4 mt-4"></div>
            {headerLinks}
          </nav>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedUser: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  loggedUser: state.loggedUser,
  error: state.errors,
})

export default connect(mapStateToProps, { logout })(Header)
