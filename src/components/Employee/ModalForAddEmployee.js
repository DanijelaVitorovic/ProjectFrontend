import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createEmployee } from "../../actions/employeeActions";

class ModalForAddEmployee extends Component {
  constructor() {
    super();
    this.state = { profession: "", manager: "" };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      profession: this.state.profession,
      manager: this.state.manager,
    };
    this.props.handleAdd(newEmployee);
  };

  render() {
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
                  Unos novog zaposlenog lica
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Unesite profesiju"
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      placeholder="Menadzer"
                      name="manager"
                      value={this.state.manager}
                      onChange={this.onChange}
                    >
                      <option value="" selected disabled>
                        Da li ste menadzer?
                      </option>
                      <option value="true">Da</option>
                      <option value="false">Ne</option>
                    </select>
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

export default ModalForAddEmployee;
