import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";
import {
  caseClassificationValidationsTranslation,
  caseClassificationTranslation,
} from "../../translations";

class ModalForUpdateCaseClassification extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      name: "",
      organizationalUnit: {
        id: 0,
      },
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getCaseClassification(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      code,
      name,
      organizationalUnit,
    } = nextProps.caseClassificationForUpdate;

    this.setState({
      code,
      name,
      organizationalUnit,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCombo = (e) => {
    this.setState({ [e.target.name]: { id: e.target.value } });
  };

  handleValidation = () => {
    const translationValidation = caseClassificationValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { code, name } = this.state;

    if (code.length < 1) {
      errors["code"] = Modals.code;
      hasErrors = true;
    }

    if (name.length < 2) {
      errors["name"] = Modals.name;
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

    const updatedCaseClassification = {
      id: this.props.id,
      code: this.state.code,
      name: this.state.name,
      organizationalUnit: { id: this.state.organizationalUnit.id },
    };
    this.props.handleUpdate(updatedCaseClassification);
  };

  render() {
    const { show, closeModal, organizationalUnits } = this.props || {};
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
                  <h3 className="display-5 text-center">
                    {caseClassificationTranslation.headingUpdate}
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
                        onChange={this.onChangeCombo}
                        className="form-control form-control-lg"
                        placeholder="Изаберите на кога се односи"
                        name="organizationalUnit"
                        value={this.state.organizationalUnit.id}
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

          <ModalFooter></ModalFooter>
        </Card>
      </Modal>
    );
  }
}

export default ModalForUpdateCaseClassification;
