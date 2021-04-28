import React, { Component, Fragment } from "react";
import CaseClassificationRow from "./CaseClassificationRow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForAddCaseClassification from "./ModalForAddCaseClassification";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { caseClassificationTableTranslation } from "../../translations";

class CaseClassificationTable extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleAdd = (newCaseClassification) => {
    this.props.createCaseClassification(newCaseClassification);
    this.closeModal();
  };

  render() {
    const {
      getCaseClassification,
      updateCaseClassification,
      deleteCaseClassification,
      organizationalUnitList,
      caseClassificationForUpdate,
    } = this.props || {};

    const caseClassificationList = this.props.caseClassificationList.map(
      (caseClassification) => (
        <CaseClassificationRow
          key={caseClassification.id}
          caseClassification={caseClassification}
          updateCaseClassification={updateCaseClassification}
          getCaseClassification={getCaseClassification}
          deleteCaseClassification={deleteCaseClassification}
          organizationalUnitList={organizationalUnitList}
          caseClassificationForUpdate={caseClassificationForUpdate}
        />
      )
    );

    const translation = caseClassificationTableTranslation || {};
    const { RowItems, Buttons } = translation;

    const table = (
      <div className="table-responsive tableHeight">
        <div align="left" style={{ paddingBottom: 20 }}>
          <Link to={`/dashboard`}>
            <Tooltip title={Buttons.back} arrow>
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </Tooltip>
          </Link>
          <Tooltip title={Buttons.addNewCaseClassification} arrow>
            <IconButton
              className="btn btn-info"
              type="submit"
              size="lm"
              onClick={() => {
                this.showModal();
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>

        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>{RowItems.id}</th>
              <th>{RowItems.name}</th>
              <th>{RowItems.namOfOrganizationalUnit}</th>
              <th className="text-center">{RowItems.update}</th>
              <th className="text-center">{RowItems.delete}</th>
            </tr>
          </thead>
          <tbody>{caseClassificationList}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddCaseClassification
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
            organizationalUnitList={organizationalUnitList}
          />
        )}
      </Fragment>
    );
  }
}

export default CaseClassificationTable;
