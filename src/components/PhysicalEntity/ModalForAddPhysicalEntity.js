import { Modal, Button, Row, Col, ModalFooter } from "react-bootstrap";
import React, { Component } from "react";
import classnames from "classnames";
import { PhysicalEntityModalForAddAndUpdateTranslation } from "../../translations";

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
      <Modal
        show={show}
        onHide={closeModal}
        onRequestClose={closeModal}
        size="xl"
        centered
        animation
      >
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
                          className={classnames("form-control", {
                            "is-invalid": errors.firstName,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.firstNamePlaceholder
                          }
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames("form-control", {
                            "is-invalid": errors.lastName,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.lastNamePlaceholder
                          }
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
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
                          className={classnames("form-control", {
                            "is-invalid": errors.email,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.emailPlaceholder
                          }
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames("form-control", {
                            "is-invalid": errors.city,
                          })}
                          placeholder={
                            SelectOptionsAndPlaceholders.cityPlaceholder
                          }
                          name="city"
                          value={this.state.city}
                          onChange={this.onChange}
                        />
                        {errors.city && (
                          <div className="invalid-feedback">{errors.city}</div>
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
