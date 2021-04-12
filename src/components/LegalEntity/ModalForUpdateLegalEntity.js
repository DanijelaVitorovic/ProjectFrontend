import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

class ModalForUpdateLegalEntity extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      pib: "",
      registrationNumber: "",
      email: "",
      statment: "PASSIVE",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getLegalEntity(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      name,
      pib,
      registrationNumber,
      email,
      statment,
    } = nextProps.legalEntityForUpdate;

    this.setState({
      id,
      name,
      pib,
      registrationNumber,
      email,
      statment,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const updateLegalEntity = {
      id: this.state.id,
      name: this.state.name,
      pib: this.state.pib,
      registrationNumber: this.state.registrationNumber,
      email: this.state.email,
      statment: this.state.statment,
      errors: {},
    };

    this.props.handleUpdate(updateLegalEntity);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
          onRequest={this.props.closeModal}
        >
          <Modal.Header closeButton><h4>
          Azuriraj pravno lice
        </h4></Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <h5 className="display-4 text-center">
                    
                  </h5>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name,
                        })}
                        placeholder="Ime"
                        name="name"
                        value={this.props.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.pib,
                        })}
                        placeholder="Prezime"
                        name="pib"
                        value={this.state.pib}
                        onChange={this.onChange}
                      />
                      {errors.pib && (
                        <div className="invalid-feedback">{errors.pib}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.email,
                        })}
                        placeholder="E-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        name="statment"
                        value={this.state.statment}
                        onChange={this.onChange}
                        style={{ fontSize: '1rem' }}
                      >
                        <option value={2}>Select Priority</option>
                        <option value={0}>ACTIVE</option>
                        <option value={1}>PASSIVE</option>
                      </select>

                      {errors.statment && (
                        <div className="invalid-feedback">
                          {errors.statment}
                        </div>
                      )}
                    </div>

                    <Button variant = 'success'
                    to="/processTypeList"
                    type="submit"
                  >
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

export default ModalForUpdateLegalEntity;
