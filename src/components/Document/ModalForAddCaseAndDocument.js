import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";
import {
  CaseModalForAddAndUpdateTranslation,
  caseValidationsTranslation,
  documentModalForAddAndUpdateTranslation,
} from "../../translations";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Typography from "@material-ui/core/Typography";
import {
  CaseType,
  getEmployeeName,
  getPhysicalEntityName,
  handleErrorMessage,
} from "../../../src/globals";
import { DocumentType, documentStatus } from "../../../src/globals";
import classnames from "classnames";

class ModalForAddCaseAndDocument extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      documentType: "",
      documentStatus: "",
      employeeCreated: "",
      caseName: "",
      caseNumber: "",
      caseType: "",
      refersTo: "",
      activeStep: 0,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidationCase = () => {
    const translationValidation = caseValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { caseName, refersTo } = this.state;

    if (caseName.length < 2) {
      errors["caseName"] = Modals.caseName;
      hasErrors = true;
    }

    if (!refersTo) {
      errors["refersTo"] = Modals.refersTo;
      hasErrors = true;
    }

    this.setState({ errors: errors });
    return hasErrors;
  };

  handleValidationDocument = () => {
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

    const translationValidation = caseValidationsTranslation;
    const { Modals } = translationValidation;

    if (this.handleValidationCase()) {
      window.alert(Modals.alertCase);
      return;
    }

    if (this.handleValidationDocument()) {
      window.alert(Modals.alertDocument);
      return;
    }

    const newCaseDocumentDTO = {
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: { id: this.state.employeeCreated },
      _case: {
        caseName: this.state.caseName,
        caseNumber: this.state.caseNumber,
        refersTo: { id: this.state.refersTo },
        caseType: this.state.caseType,
      },
    };
    this.props.handleAddCaseAndDocument(newCaseDocumentDTO);
  };

  getStepContent = (step) => {
    const { employees, physicalEntities } = this.props || {};
    const translation = CaseModalForAddAndUpdateTranslation || {};
    const { SelectOptionsAndPlaceholders, Header } = translation;
    const translation1 = documentModalForAddAndUpdateTranslation || {};
    const SelectOptionsAndPlaceholders1 =
      translation1.SelectOptionsAndPlaceholders;
    const { errors } = this.state;

    switch (step) {
      case 0:
        return (
          <div>
            <div className="form-group">
              <input
                type="text"
                className={classnames("form-control", {
                  "is-invalid": errors.caseName,
                })}
                placeholder={SelectOptionsAndPlaceholders.caseNamePlaceholder}
                name="caseName"
                value={this.state.caseName}
                onChange={this.onChange}
              />
              {handleErrorMessage(errors.caseName) && (
                <span
                  className="invalid-feedback"
                  style={{ fontSize: 16, color: "red" }}
                >
                  {errors.caseName}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder={SelectOptionsAndPlaceholders.caseNumberPlaceholder}
                name="caseNumber"
                value={this.state.caseNumber}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <select
                physicalEntities={physicalEntities}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.refersTo,
                })}
                name="refersTo"
              >
                <option value="" selected disabled>
                  {SelectOptionsAndPlaceholders.refersToOption}
                </option>
                {physicalEntities.map((physicalEntity) => {
                  return (
                    <option value={physicalEntity.id}>
                      {getPhysicalEntityName(physicalEntity)}
                    </option>
                  );
                })}
              </select>
              {handleErrorMessage(errors.refersTo) && (
                <span
                  className="invalid-feedback"
                  style={{ fontSize: 16, color: "red" }}
                >
                  {errors.refersTo}
                </span>
              )}
            </div>

            <div className="form-group">
              <select
                className="form-control"
                name="caseType"
                value={this.state.caseType}
                onChange={this.onChange}
              >
                <option value="" selected disabled>
                  {SelectOptionsAndPlaceholders.caseType}
                </option>
                {Object.keys(CaseType).map((key) => (
                  <option key={key} value={key}>
                    {CaseType[key].translation}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div className="form-group">
              <input
                type="text"
                className={classnames("form-control", {
                  "is-invalid": errors.title,
                })}
                placeholder={SelectOptionsAndPlaceholders1.titlePlaceholder}
                name="title"
                value={this.state.title}
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
                  SelectOptionsAndPlaceholders1.descriptionPlaceholder
                }
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <select
                className="form-control"
                placeholder={SelectOptionsAndPlaceholders1.typePlaceholder}
                name="documentType"
                value={this.state.documentType}
                onChange={this.onChange}
                style={{ fontSize: "1rem" }}
              >
                <option value="" selected disabled>
                  {SelectOptionsAndPlaceholders1.typeOption}
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
                className="form-control"
                placeholder={SelectOptionsAndPlaceholders1.statusPlaceholder}
                name="documentStatus"
                value={this.state.documentStatus}
                onChange={this.onChange}
                style={{ fontSize: "1rem" }}
              >
                <option value="" selected disabled>
                  {SelectOptionsAndPlaceholders1.statusOption}
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
                employees={employees}
                name="employeeCreated"
                placeholder={SelectOptionsAndPlaceholders1.employeePlaceholder}
                onChange={this.onChange}
                style={{ fontSize: "1rem" }}
              >
                <option value="" selected disabled>
                  {SelectOptionsAndPlaceholders1.employeeOption}
                </option>
                {employees.map((employee) => {
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
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  getSteps = () => {
    return ["Unos Predmeta", "Unos Dokumenta"];
  };

  handleStep = (step) => () => {
    this.setState({ activeStep: step });
  };

  render() {
    const { activeStep } = this.state;
    const steps = this.getSteps();

    const {
      showModalForAddingCaseAndDocument,
      closeModalForAddCaseAndDocument,
    } = this.props || {};

    const translation = CaseModalForAddAndUpdateTranslation || {};
    const { Header } = translation;
    const { errors } = this.state;

    return (
      <Modal
        show={showModalForAddingCaseAndDocument}
        onHide={closeModalForAddCaseAndDocument}
        onRequestClose={closeModalForAddCaseAndDocument}
        size="lg"
        centered
        animation
      >
        <Card bg={"white"} text={"black"} style={{ paddingBottom: 20 }}>
          <Modal.Header closeButton> {Header.heading}</Modal.Header>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <form onSubmit={this.onSubmit}>
                    <div>
                      <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                          <Step key={label}>
                            <StepButton onClick={this.handleStep(index)}>
                              {label}
                            </StepButton>
                          </Step>
                        ))}
                      </Stepper>
                      <Typography>{this.getStepContent(activeStep)}</Typography>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary float-right btn-default"
                    >
                      <i className="fas fa-check fa-2x" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    );
  }
}

export default ModalForAddCaseAndDocument;
