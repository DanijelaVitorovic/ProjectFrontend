import React, { Component } from "react";
import style from "./style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashboardTranslation } from "../../translations";
import ParticlesBg from "particles-bg";

class Dashboard extends Component {
  render() {
    const translation = DashboardTranslation || {};
    const { DashboardItems } = translation;

    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random"],
      cross: "dead",
      random: 15,
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        },
      });
    }

    return (
      <div className="wrapper">
        <div className="title">
          <h1 class="text-center">{DashboardItems.welcomeTitle}</h1>
          <p class="text-center">{DashboardItems.welcomeParagraph}</p>
        </div>
        <ParticlesBg
          type="cobweb"
          config={config}
          bg={true}
          color="#17A2B8"
          num={150}
        />
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
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">
                {DashboardItems.caseClassification}
              </h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/caseClassificationList"
                centered
              >
                <p className="text-dash" style={{ paddingBotton: 10 }}>
                  {" "}
                  {DashboardItems.caseClassificationList}
                </p>
              </Link>
            </div>
          </div>
          <p> </p>
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
          <p> </p>
          <div className="card-dashboard">
            <div className="card-header">
              <h4 className="card-title">{DashboardItems.case}</h4>
            </div>
            <div className="card-body">
              <Link
                className="btn-dashboard"
                type="submit"
                variant="success"
                to="/caseList"
                centered
              >
                <p className="text-dash">{DashboardItems.caseList}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
