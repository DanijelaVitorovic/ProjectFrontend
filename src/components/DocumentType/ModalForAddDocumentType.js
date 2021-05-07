import React, { Component } from "react";
import { Modal, Card, Container } from "react-bootstrap";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";
import { documentTypeModalForAddAndUpdateTranslation } from "../../translations";

export default class ModalForAddDocumentType extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    let errors = {};
    let hasErrors = false;
    let { name, description } = this.state;

    const translation = documentTypeModalForAddAndUpdateTranslation;
    const { SelectOptionsAndPlaceholders } = translation || {};

    if (name.length < 1) {
      errors["name"] = SelectOptionsAndPlaceholders.nameError;
      hasErrors = true;
    }

    if (description.length > 2000 || description.length < 1) {
      errors["description"] = SelectOptionsAndPlaceholders.descriptionError;
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

    const newDocumentType = {
      description: this.state.description,
      name: this.state.name,
    };
    this.props.resetError();
    this.props.handleAdd(newDocumentType);
  };

  render() {
    const { show, closeModal, error } = this.props || {};
    const { errors } = this.state;
    const translation = documentTypeModalForAddAndUpdateTranslation;
    const { SelectOptionsAndPlaceholders, Header } = translation || {};

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
          <Modal.Header closeButton>
            {error && (
              <Container
                className="col-md-12 text-center "
                style={{ paddingTop: 20 }}
              >
                <div className="row">
                  <div
                    className="col-md-8 m-auto"
                    style={{
                      color: "white",
                      paddingLeft: 60,
                      paddingRight: 60,
                      background: "#EA5252",
                    }}
                  >
                    {error.message}
                  </div>
                </div>
              </Container>
            )}
          </Modal.Header>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-5 text-center">
                    {Header.headingAddModal}
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.namePlaceholder
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
                          {errors.code}
                        </span>
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
                      {handleErrorMessage(errors.description) && (
                        <span
                          className="invalid-feedback"
                          style={{ fontSize: 16, color: "red" }}
                        >
                          {errors.description}
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
      </Modal>
    );
  }
}
