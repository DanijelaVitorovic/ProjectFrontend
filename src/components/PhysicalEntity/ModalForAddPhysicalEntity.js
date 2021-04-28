import { Modal, Row, Col, ModalFooter } from "react-bootstrap";
import React, { Component } from "react";
import classnames from "classnames";
import {
  PhysicalEntityModalForAddAndUpdateTranslation,
  physicalEntityValidationsTranslation,
} from "../../translations";
import { handleErrorMessage } from "../../globals";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class ModalForAddPhysicalEntity extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      profession: "",
      email: "",
      city: "",
      street: "",
      streetNumber: "",
      floor: "",
      apartmanNumber: "",
      zipCode: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = physicalEntityValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { firstName, lastName, city, email } = this.state;

    if (firstName.length < 2) {
      errors["firstName"] = Modals.firstName;
      hasErrors = true;
    }

    if (lastName.length < 2) {
      errors["lastName"] = Modals.lastName;
      hasErrors = true;
    }

    if (!city) {
      errors["city"] = Modals.city;

      hasErrors = true;
    }

    if (!validEmailRegex.test(email)) {
      errors["email"] = Modals.email;
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

    const newPhysicalEntity = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      profession: this.state.profession,
      email: this.state.email,
      address: {
        city: this.state.city,
        street: this.state.street,
        streetNumber: this.state.streetNumber,
        floor: this.state.floor,
        apartmanNumber: this.state.apartmanNumber,
        zipCode: this.state.zipCode,
      },
    };
    this.props.handleAdd(newPhysicalEntity);
  };

  render() {
    const { errors } = this.state;
    const { show, closeModal } = this.props || {};
    const translation = PhysicalEntityModalForAddAndUpdateTranslation || {};
    const { Header, SelectOptionsAndPlaceholders } = translation;

    return (
      <Modal show={show} onHide={closeModal} size="xl" centered animation>
        <Modal.Header closeButton></Modal.Header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-5 text-center">
                  {Header.headingAddModal}
                </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <Row>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.firstName,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.firstNamePlaceholder
                          }
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                        />
                        {handleErrorMessage(errors.firstName) && (
                          <span
                            className="invalid-feedback"
                            style={{ fontSize: 16, color: "red" }}
                          >
                            {errors.firstName}
                          </span>
                        )}
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.lastName,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.lastNamePlaceholder
                          }
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                        />
                        {handleErrorMessage(errors.lastName) && (
                          <span
                            className="invalid-feedback"
                            style={{ fontSize: 16, color: "red" }}
                          >
                            {errors.lastName}
                          </span>
                        )}
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.middleNamePlaceholder
                          }
                          name="middleName"
                          value={this.state.middleName}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.professionPlaceholder
                          }
                          name="profession"
                          value={this.state.profession}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.email,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.emailPlaceholder
                          }
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        {handleErrorMessage(errors.email) && (
                          <span
                            className="invalid-feedback"
                            style={{ fontSize: 16, color: "red" }}
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.city,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.cityPlaceholder
                          }
                          name="city"
                          value={this.state.city}
                          onChange={this.onChange}
                        />
                        {handleErrorMessage(errors.city) && (
                          <span
                            className="invalid-feedback"
                            style={{ fontSize: 16, color: "red" }}
                          >
                            {errors.city}
                          </span>
                        )}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.streetPlaceholder
                          }
                          name="street"
                          value={this.state.street}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.streetNumberPlaceholder
                          }
                          name="streetNumber"
                          value={this.state.streetNumber}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.floorPlaceholder
                          }
                          name="floor"
                          value={this.state.floor}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} md={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.apartmanNumberPlaceholder
                          }
                          name="apartmanNumber"
                          value={this.state.apartmanNumber}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            SelectOptionsAndPlaceholders.zipCodePlaceholder
                          }
                          name="zipCode"
                          value={this.state.zipCode}
                          onChange={this.onChange}
                        />
                      </div>
                    </Col>
                  </Row>

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
      </Modal>
    );
  }
}

export default ModalForAddPhysicalEntity;
