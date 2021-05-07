import React, { Component } from "react";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";
import { Modal, Card } from "react-bootstrap";
import { documentTypeModalForAddAndUpdateTranslation } from "../../translations";

export default class ModalForUpdateDocumentType extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getDocumentType(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const { name, description } = nextProps.documentTypeForUpdate;

    this.setState({
      name,
      description,
    });
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

    const updatedDocumentType = {
      id: this.props.id,
      name: this.state.name,
      description: this.state.description,
    };
    this.props.handleUpdate(updatedDocumentType);
  };

  render() {
    const { show, closeModal } = this.props || {};
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
          <Modal.Header closeButton></Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-5 text-center">
                    {Header.headingUpdateModal}
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
                          {errors.name}
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
