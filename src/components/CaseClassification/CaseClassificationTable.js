import React, { Component, Fragment } from "react";
import CaseClassificationRow from "./CaseClassificationRow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForAddCaseClassification from "./ModalForAddCaseClassification";

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
      organizationalUnits,
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
          organizationalUnits={organizationalUnits}
          caseClassificationForUpdate={caseClassificationForUpdate}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <Button
              class="btn btn-default"
              type="submit"
              variant="info"
              onClick={() => {
                this.showModal();
              }}
            >
              Унеси нову класификацију
            </Button>

            <br />
            <br />
            <tr>
              <th>Шифра</th>
              <th>Име класификације</th>
              <th>Име организационе јединице</th>
              <th className="text-center">Измена</th>
              <th className="text-center">Брисање</th>
            </tr>
          </thead>
          <tbody>{caseClassificationList}</tbody>
          <Link to={`/dashboard`}>
            <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
          </Link>

          <br />
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
            organizationalUnits={organizationalUnits}
          />
        )}
      </Fragment>
    );
  }
}

export default CaseClassificationTable;
