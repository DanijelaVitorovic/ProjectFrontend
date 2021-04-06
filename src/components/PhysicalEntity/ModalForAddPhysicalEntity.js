import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import classnames from "classnames";

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
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequestClose={this.props.closeModal}
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h5 className="display-4 text-center">
                  Унос новог физичког лица
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.firstName,
                      })}
                      placeholder="Име"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.lastName,
                      })}
                      placeholder="Презиме"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Име оца"
                      name="middleName"
                      value={this.state.middleName}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Занимање"
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.email,
                      })}
                      placeholder="E-мејл"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.city,
                      })}
                      placeholder="Место пребивалишта"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Улица"
                      name="street"
                      value={this.state.street}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Број улице"
                      name="streetNumber"
                      value={this.state.streetNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Спрат"
                      name="floor"
                      value={this.state.floor}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Број стана"
                      name="apartmanNumber"
                      value={this.state.apartmanNumber}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Поштански број"
                      name="zipCode"
                      value={this.state.zipCode}
                      onChange={this.onChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary float-right">
                    <i className="fas fa-check fa-2x" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Button
          onClick={() => {
            this.props.closeModal();
          }}
        >
          Zatvori
        </Button>
      </Modal>
    );
  }
}

export default ModalForAddPhysicalEntity;
