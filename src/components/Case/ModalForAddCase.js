import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";
import { CaseType } from "../../../src/globals";

class ModalForAddCase extends Component {
  constructor() {
    super();
    this.state = {
      caseName: "",
      caseNumber: "",
      caseType: "",
      owner: "",
      processor: "",
      refersTo: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newCase = {
      caseName: this.state.caseName,
      caseNumber: this.state.caseNumber,
      refersTo: { id: this.state.refersTo },
      caseType: this.state.caseType,
      owner: { id: this.state.owner },
      processor: { id: this.state.owner },
    };
    this.props.handleAdd(newCase);
  };

  render() {
    const physicalEntities = this.props.physicalEntities;
    const employees = this.props.employees;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequestClose={this.props.closeModal}
        size="lg"
        centered
        animation
      >
        <Card bg={"white"} text={"black"}>
          <Modal.Header closeButton></Modal.Header>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-5 text-center">Унос новог предмета</h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Унесите име предмета"
                        name="caseName"
                        value={this.state.caseName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Унесите број предмета"
                        name="caseNumber"
                        value={this.state.caseNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        physicalEntities={physicalEntities}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Изаберите на кога се односи"
                        name="refersTo"
                      >
                        <option value="" selected disabled>
                          Изаберите на кога се односи
                        </option>
                        {physicalEntities.map((physicalEntity) => {
                          return (
                            <option value={physicalEntity.id}>
                              {physicalEntity.firstName +
                                " " +
                                physicalEntity.lastName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        employees={employees}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Изаберите обрађивача"
                        name="processor"
                      >
                        <option value="" selected disabled>
                          Изаберите обрађивача
                        </option>
                        {employees.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {employee.profession}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        employees={employees}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Изаберите власника"
                        name="owner"
                      >
                        <option value="" selected disabled>
                          Изаберите власника
                        </option>
                        {employees.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {employee.profession}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder="Унесите тип предмета"
                        name="caseType"
                        value={this.state.caseType}
                        onChange={this.onChange}
                      >
                        <option value="" selected disabled>
                          Унесите тип предмета
                        </option>
                        {Object.keys(CaseType).map((key) => (
                          <option key={key} value={key}>
                            {CaseType[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary float-right btn-success"
                    >
                      <i className="fas fa-check fa-2x" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
        </Card>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }
}
export default ModalForAddCase;
