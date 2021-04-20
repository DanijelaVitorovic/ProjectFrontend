import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import classnames from "classnames";
import { DocumentType, documentStatus } from "../../../src/globals";
import { documentModalForAddAndUpdateTranslation } from "../../translations";

class ModalForAddDocument extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      documentType: "",
      documentStatus: "PROCEEDING",
      employeeCreated: "",
      _case: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newDocument = {
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: { id: this.state.employeeCreated },
      _case: { id: this.state._case },
    };
    this.props.handleAdd(newDocument);
  };

  render() {
    const { errors } = this.state;
    const { employees, caseList, physicalEntities, show, closeModal } =
      this.props || {};
    const translation = documentModalForAddAndUpdateTranslation || {};
    const { Header, SelectOptionsAndPlaceholders } = translation;
    return (
      <div>
        <Modal
          show={show}
          onHide={closeModal}
          onRequest={closeModal}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <h4>{Header.headingAddModal}</h4>
          </Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.title,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.titlePlaceholder
                        }
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                      {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.description,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.descriptionPlaceholder
                        }
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      {errors.description && (
                        <div className="invalid-feedback">
                          {errors.description}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.typePlaceholder
                        }
                        name="documentType"
                        value={this.state.documentType}
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.typeOption}
                        </option>
                        {Object.keys(DocumentType).map((key) => (
                          <option key={key} value={key}>
                            {DocumentType[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.statusPlaceholder
                        }
                        name="documentStatus"
                        value="PROCEEDING"
                        style={{ fontSize: "1rem" }}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.statusOption}
                        </option>
                        {Object.keys(documentStatus).map((key) => (
                          <option key={key} value={key}>
                            {documentStatus[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        employees={employees}
                        name="employeeCreated"
                        placeholder={
                          SelectOptionsAndPlaceholders.employeePlaceholder
                        }
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.employeeOption}
                        </option>
                        {employees.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {employee.physicalEntity.firstName}{" "}
                              {employee.physicalEntity.lastName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        caseList={caseList}
                        name="_case"
                        placeholder={
                          SelectOptionsAndPlaceholders._casePlaceholder
                        }
                        onChange={this.onChange}
                        style={{ fontSize: "1rem" }}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders._caseOption}
                        </option>
                        {caseList.map((_case) => {
                          return (
                            <option value={_case.id}>{_case.caseName}</option>
                          );
                        })}
                      </select>
                    </div>

                    <Button variant="success" type="submit">
                      <i class="fas fa-check fa-2x"></i>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </Modal>
      </div>
    );
  }
}

export default ModalForAddDocument;
