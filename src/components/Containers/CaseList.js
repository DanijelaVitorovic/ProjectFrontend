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
import { CaseListTranslation } from "../../translations";
import {getProcessTypes} from '../../actions/processTypeActions';

class CaseList extends Component {
  componentDidMount() {
    this.props.getCases();
    this.props.getPhysicalEntities();
    this.props.getEmployees();
    this.props.getProcessTypes();
  }

  render() {
    const { physicalEntityList } = this.props.physicalEntity;
    const { employeeList } = this.props.employee;
    const _case = this.props.case.case;
    const caseList = this.props.case.caseList;
    const { createCase, updateCase, getCase, getCases, deleteCase } =
      this.props || {};
    const {processTypeList, processList} = this.props || {};
    const translation = CaseListTranslation || {};
    const { Header } = translation;

    return (
      <div className="container">
        <div className="row" style={{margintop: '30px'}}>
          <div className="col m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div class="col-md-12 m-auto" style={{margintop: '30px'}}>
                <div className="card-body"></div>
                <CaseTable
                  caseList={caseList}
                  createCase={createCase}
                  updateCase={updateCase}
                  getCase={getCase}
                  getCases={getCases}
                  deleteCase={deleteCase}
                  physicalEntityList={physicalEntityList}
                  caseForUpdate={_case}
                  employeeList={employeeList}
                  processTypeList={processTypeList}
                  processList={processList}
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
  processTypeList: state.processType.processTypeList,
});

export default connect(mapStateToProps, {
  createCase,
  updateCase,
  getCases,
  getCase,
  deleteCase,
  getPhysicalEntities,
  getEmployees,
  getProcessTypes,
})(CaseList);
