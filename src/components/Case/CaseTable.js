import React, { Component, Fragment } from "react";
import CaseRow from "./CaseRow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForAddCase from "./ModalForAddCase";

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
    const caseList = this.props.caseList.map((_case) => (
      <CaseRow
        key={_case.id}
        case={_case}
        updateCase={this.props.updateCase}
        getCase={this.props.getCase}
        deleteCase={this.props.deleteCase}
        caseForUpdate={this.props.caseForUpdate}
        physicalEntities={this.props.physicalEntities}
        employees={this.props.employees}
      />
    ));

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
              Унеси нови предмет
            </Button>

            <br />
            <br />
            <tr>
              <th>Назив</th>
              <th>Број</th>
              <th>Власник</th>
              <th>Обрађивач</th>
              <th>Односи се на</th>
              <th>Почетак</th>
              <th>Статус</th>
              <th className="text-center">Измена</th>
            </tr>
          </thead>
          <tbody>{caseList}</tbody>
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
            physicalEntities={this.props.physicalEntities}
            employees={this.props.employees}
          />
        )}
      </Fragment>
    );
  }
}
export default CaseTable;
