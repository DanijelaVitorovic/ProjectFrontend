import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuBarUsers extends Component {
  render() {
    return (
      <div id="navbarNavDropdownUsersDiv">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownUsersLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Korisnici
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/userList">
                Prikaz korisnika
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownUsersLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pravna lica
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/addLegalEntity">
                Dodaj pravno lice
              </Link>
              <Link className="dropdown-item" to="/legalEntityList">
                Prikaz pravnih lica
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownUsersLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Process Type
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/addProcessType">
              Dodaj
            </Link>
            <Link className="dropdown-item" to="/processTypeList">
              Prikazi listu
            </Link>
          </div>
        </li>
        </ul>
      </div>
    );
  }
}

export default MenuBarUsers;
