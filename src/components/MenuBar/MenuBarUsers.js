import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../translations";

class MenuBarUsers extends Component {
  render() {
    const translation = Menus || {};
    const { UsersMenuBar } = translation;

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
              {UsersMenuBar.heading}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/userList">
                {UsersMenuBar.userList}
              </Link>
              <Link className="dropdown-item" to="/addUser">
                {UsersMenuBar.addUser}
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
              {UsersMenuBar.Subjects.heading}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/physicalEntityList">
                {UsersMenuBar.Subjects.physicalEntityList}
              </Link>
              <Link className="dropdown-item" to="/employeeList">
                {UsersMenuBar.Subjects.employeeList}
              </Link>
              <Link className="dropdown-item" to="/legalEntityList">
                {UsersMenuBar.Subjects.legalEntityList}
              </Link>
              <Link className="dropdown-item" to="/processTypeList">
                {UsersMenuBar.Subjects.processTypeList}
              </Link>
              <Link className="dropdown-item" to="/organizationalUnitList">
                {UsersMenuBar.Subjects.organizationalUnitList}
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
              {UsersMenuBar.Process.heading}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/addProcess">
                {UsersMenuBar.Process.addProcess}
              </Link>
              <Link className="dropdown-item" to="/processList">
                {UsersMenuBar.Process.showProcessList}
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
              {UsersMenuBar.Cases.heading}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/caseList">
                {UsersMenuBar.Cases.caseList}
              </Link>
              <Link className="dropdown-item" to="/caseClassificationList">
                {UsersMenuBar.Cases.caseClassificationList}
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
              {UsersMenuBar.Document.heading}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/documentList">
                {UsersMenuBar.Document.showDocumentList}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBarUsers;
