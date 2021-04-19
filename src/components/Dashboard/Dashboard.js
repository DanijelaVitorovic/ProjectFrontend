import React, { Component } from "react";
import style from "./style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashboardTranslation } from "../../translations";

class Dashboard extends Component {
  render() {
    const translation = DashboardTranslation || {};
    const { DashboardItems } = translation;

    return (
      <div className="wrapper">
        <div className="title">
          <h1 class="text-center">{DashboardItems.welcomeTitle}</h1>
          <p class="text-center">{DashboardItems.welcomeParagraph}</p>
        </div>
        <div className="row">
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.physicalEntity}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/physicalEntityList"
                centered
              >
                <p className="text-dash">
                  {" "}
                  {DashboardItems.physicalEntityList}
                </p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.employee}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/employeeList"
                centered
              >
                <p className="text-dash">{DashboardItems.employeeList}</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.legalEntity}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/legalEntityList"
                centered
              >
                <p className="text-dash">{DashboardItems.legalEntityList}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.processType}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/processTypeList"
                centered
              >
                <p className="text-dash"> {DashboardItems.processTypeList}</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.process}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/processTypeList"
                centered
              >
                <p className="text-dash">{DashboardItems.processList}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">
                {DashboardItems.organizationalUnit}
              </h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/organizationalUnitList"
                centered
              >
                <p>{DashboardItems.organizationalUnitList}</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.document}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/documentList"
                centered
              >
                <p className="text-dash">{DashboardItems.documentList}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
