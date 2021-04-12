import React, { Component } from "react";
import CaseTable from "../Case/CaseTable";
import { connect } from "react-redux";
import {
  createCase,
  updateCase,
  getCases,
  getCase,
  deleteCase,
} from "../../actions/caseActions";
import { getPhysicalEntities } from "../../actions/physicalEntityActions";
import { getEmployees } from "../../actions/employeeActions";

class CaseList extends Component {
  componentDidMount() {
    this.props.getCases();
    this.props.getPhysicalEntities();
    this.props.getEmployees();
  }

  render() {
    const { physicalEntities } = this.props.physicalEntity;
    const { employees } = this.props.employee;
    const _case = this.props.case.case;
    const caseList = this.props.case.caseList;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Предмети</h3>
              </div>
              <div class="col-md-12 m-auto">
                <div className="card-body"></div>
                <CaseTable
                  caseList={caseList}
                  createCase={this.props.createCase}
                  updateCase={this.props.updateCase}
                  getCase={this.props.getCase}
                  getCases={this.props.getCases}
                  deleteCase={this.props.deleteCase}
                  physicalEntities={physicalEntities}
                  caseForUpdate={_case}
                  employees={employees}
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  case: state.case,
  errors: state.errors,
  physicalEntity: state.physicalEntity,
  employee: state.employee,
});

export default connect(mapStateToProps, {
  createCase,
  updateCase,
  getCases,
  getCase,
  deleteCase,
  getPhysicalEntities,
  getEmployees,
})(CaseList);
