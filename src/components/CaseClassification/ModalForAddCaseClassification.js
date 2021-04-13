import React, { Component } from "react";
import { Modal, ModalFooter, Card } from "react-bootstrap";

class ModalForAddCaseClassification extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      name: "",
      organizationalUnit: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newCaseClassification = {
      code: this.state.code,
      name: this.state.name,
      organizationalUnit: { id: this.state.organizationalUnit },
    };
    this.props.handleAdd(newCaseClassification);
  };

  render() {
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
                    Унос нове класификације предмета
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Унесите шифру класификације"
                        name="code"
                        value={this.state.code}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Унесите име класификације"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        organizationalUnits={organizationalUnits}
                        onChange={this.onChange}
                        className="form-control form-control-lg"
                        placeholder="Изаберите којој организационој јединици припада"
                        name="organizationalUnit"
                      >
                        <option value="" selected disabled>
                          Изаберите којој организационој јединици припада
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
        </Card>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }
}

export default ModalForAddCaseClassification;
