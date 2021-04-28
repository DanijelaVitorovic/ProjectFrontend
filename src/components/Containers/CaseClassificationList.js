import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCaseClassification,
  getCaseClassificationList,
  createCaseClassification,
  updateCaseClassification,
  deleteCaseClassification,
} from "../../actions/caseClassificationActions";
import { getOrganizationalUnits } from "../../actions/organizationalUnitAcitons";
import CaseClassificationTable from "../CaseClassification/CaseClassificationTable";
import { caseClassificationListTranslation } from "../../translations";

class CaseClassificationList extends Component {
  componentDidMount() {
    this.props.getCaseClassificationList();
    this.props.getOrganizationalUnits();
  }

  render() {
    const { caseClassification, caseClassificationList } =
      this.props.caseClassification || {};
    const { organizationalUnitList } = this.props.organizationalUnit || {};
    const {
      getCaseClassification,
      createCaseClassification,
      updateCaseClassification,
      deleteCaseClassification,
    } = this.props || {};
    const translation = caseClassificationListTranslation || {};
    const { Header } = translation;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div class="col-md-12 m-auto">
                <div className="card-body"></div>
                <CaseClassificationTable
                  caseClassificationList={caseClassificationList}
                  organizationalUnitList={organizationalUnitList}
                  createCaseClassification={createCaseClassification}
                  updateCaseClassification={updateCaseClassification}
                  getCaseClassification={getCaseClassification}
                  deleteCaseClassification={deleteCaseClassification}
                  caseClassificationForUpdate={caseClassification}
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
  caseClassification: state.caseClassification,
  organizationalUnit: state.organizationalUnit,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getCaseClassification,
  getCaseClassificationList,
  createCaseClassification,
  updateCaseClassification,
  deleteCaseClassification,
  getOrganizationalUnits,
})(CaseClassificationList);
