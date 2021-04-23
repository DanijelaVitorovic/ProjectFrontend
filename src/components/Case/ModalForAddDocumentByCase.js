import React, { Component } from "react";
import { Modal, ModalFooter, Card, Button } from "react-bootstrap";
import {
  DocumentType,
  documentStatus,
  getEmployeeName,
} from "../../../src/globals";
import {
  documentModalForAddAndUpdateTranslation,
  caseValidationsTranslation,
} from "../../translations";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";

class ModalForAddDocumentByCase extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      documentType: "",
      documentStatus: "",
      employeeCreated: "",
      _case: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = caseValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { title, employeeCreated } = this.state;

    if (title.length < 2) {
      errors["title"] = Modals.title;
      hasErrors = true;
    }

    if (!employeeCreated) {
      errors["employeeCreated"] = Modals.employeeCreated;
      hasErrors = true;
    }

    this.setState({ errors: errors });
    return hasErrors;
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      return;
    }

    const newDocument = {
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: { id: this.state.employeeCreated },
      _case: { id: this.props.id },
    };
    this.props.handleAdd(newDocument);
  };

  render() {
    const { employeeList, show, closeModal } = this.props || {};
    const translation = documentModalForAddAndUpdateTranslation || {};
    const { SelectOptionsAndPlaceholders, Header } = translation;
    const { errors } = this.state;

    return (
      <Modal
        show={show}
        onHide={closeModal}
        onRequestClose={closeModal}
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
                  <h3
                    className="display-5 text-center"
                    style={{ paddingBottom: 20, paddingTop: 20 }}
                  >
                    {Header.headingAddModal}
                  </h3>
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
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.title) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.title}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          SelectOptionsAndPlaceholders.descriptionPlaceholder
                        }
                        name="description"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.typePlaceholder
                        }
                        name="documentType"
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
                        value={this.state.documentStatus.statusOption}
                        onChange={this.onChange}
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
                        className={classnames("form-control", {
                          "is-invalid": errors.employeeCreated,
                        })}
                        employeeList={employeeList}
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
                        {employeeList.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {getEmployeeName(employee)}
                            </option>
                          );
                        })}
                      </select>
                      {handleErrorMessage(errors.employeeCreated) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.employeeCreated}
                        </span>
                      )}
                    </div>
                    <div align="right">
                      <Button variant="success" type="submit">
                        <i class="fas fa-check fa-2x"></i>
                      </Button>
                    </div>
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

export default ModalForAddDocumentByCase;
