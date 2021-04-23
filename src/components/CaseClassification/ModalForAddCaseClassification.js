import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";
import {
  caseClassificationValidationsTranslation,
  caseClassificationTranslation,
} from "../../translations";

class ModalForAddCaseClassification extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      name: "",
      organizationalUnit: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = caseClassificationValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { code, name, organizationalUnit } = this.state;

    if (code.length < 1) {
      errors["code"] = Modals.code;
      hasErrors = true;
    }

    if (name.length < 2) {
      errors["name"] = Modals.name;
      hasErrors = true;
    }

    if (!organizationalUnit) {
      errors["organizationalUnit"] = Modals.organizationalUnit;
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

    const newCaseClassification = {
      code: this.state.code,
      name: this.state.name,
      organizationalUnit: { id: this.state.organizationalUnit },
    };
    this.props.handleAdd(newCaseClassification);
  };

  render() {
    const { errors } = this.state;
    const { show, closeModal, organizationalUnits } = this.props || {};

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
                  <h3 className="display-5 text-center">
                    {caseClassificationTranslation.heading}
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.code,
                        })}
                        placeholder={
                          caseClassificationTranslation.codePlaceholder
                        }
                        name="code"
                        value={this.state.code}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.code) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.code}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name,
                        })}
                        placeholder={
                          caseClassificationTranslation.namePlaceholder
                        }
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.name) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <select
                        organizationalUnits={organizationalUnits}
                        onChange={this.onChange}
                        className={classnames("form-control", {
                          "is-invalid": errors.organizationalUnit,
                        })}
                        name="organizationalUnit"
                      >
                        <option value="" selected disabled>
                          {
                            caseClassificationTranslation.organizationalUnitSelect
                          }
                        </option>
                        {organizationalUnits.map((organizationalUnit) => {
                          return (
                            <option value={organizationalUnit.id}>
                              {organizationalUnit.name}
                            </option>
                          );
                        })}
                      </select>
                      {handleErrorMessage(errors.organizationalUnit) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.organizationalUnit}
                        </span>
                      )}
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

export default ModalForAddCaseClassification;
