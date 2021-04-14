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
              <h4 className="card-title">Физичка лица</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/physicalEntityList"
                centered
              >
               <p className="text-dash"> Приказ физичких лица</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">Запослена лица</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/employeeList"
                centered
              >
              <p className="text-dash"> Приказ запослених лица</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">Правна лица</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/legalEntityList"
                centered
              >
              <p className="text-dash">  Приказ правних лица</p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">Типови процеса</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/processTypeList"
                centered
              >
               <p className="text-dash"> Приказ типова</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">Процеси</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/processTypeList"
                centered
              >
              <p className="text-dash"> Приказ процеса</p>
              </Link>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title"> Организационе јединице</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/organizationalUnitList"
                centered
              >
               <p>Приказ организационих јединица</p>
              </Link>
            </div>
          </div>
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">Документи</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/documentList"
                centered
              >
              <p className="text-dash">Приказ докумената </p>
              </Link>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
