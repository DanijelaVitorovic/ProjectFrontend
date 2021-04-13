import React, { Component, Fragment } from "react";
import CaseRow from "./CaseRow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForAddCase from "./ModalForAddCase";
import { CaseTableTranslation } from "../../translations";

class CaseTable extends Component {
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

  handleAdd = (newCase) => {
    this.props.createCase(newCase);
    this.closeModal();
  };

  render() {
    const {
      updateCase,
      getCase,
      deleteCase,
      caseForUpdate,
      physicalEntityList,
      employeeList,
    } = this.props || {};

    const caseListShowedInRow = this.props.caseList.map((_case) => (
      <CaseRow
        key={_case.id}
        case={_case}
        updateCase={updateCase}
        getCase={getCase}
        deleteCase={deleteCase}
        caseForUpdate={caseForUpdate}
        physicalEntityList={physicalEntityList}
        employeeList={employeeList}
      />
    ));

    const translation = CaseTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

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
              {Buttons.addNewCase}
            </Button>

            <br />
            <br />
            <tr>
              <th>{HeaderColumns.name}</th>
              <th>{HeaderColumns.number}</th>
              <th>{HeaderColumns.owner}</th>
              <th>{HeaderColumns.processor}</th>
              <th>{HeaderColumns.refersTo}</th>
              <th>{HeaderColumns.startDate}</th>
              <th>{HeaderColumns.status}</th>
              <th className="text-center">{HeaderColumns.update}</th>
            </tr>
          </thead>
          <tbody>{caseListShowedInRow}</tbody>
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
          <ModalForAddCase
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
            physicalEntityList={physicalEntityList}
            employeeList={employeeList}
          />
        )}
      </Fragment>
    );
  }
}
export default CaseTable;
