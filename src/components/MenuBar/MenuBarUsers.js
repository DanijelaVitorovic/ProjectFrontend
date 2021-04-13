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
              Корисници
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/userList">
                Приказ корисника
              </Link>
              <Link className="dropdown-item" to="/addUser">
                Креирај новог корисника
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
              Субјекти
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/physicalEntityList">
                Приказ физичких лица
              </Link>
              <Link className="dropdown-item" to="/employeeList">
                Приказ запослених лица
              </Link>
              <Link className="dropdown-item" to="/legalEntityList">
                Приказ правних лица
              </Link>
              <Link className="dropdown-item" to="/processTypeList">
                Приказ типова процеса
              </Link>
              <Link className="dropdown-item" to="/organizationalUnitList">
                Приказ организациних јединица
              </Link>
              <Link className="dropdown-item" to="/caseList">
                Приказ предмета
              </Link>
              <Link className="dropdown-item" to="/caseClassificationList">
                Приказ класификација предмета
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBarUsers;
