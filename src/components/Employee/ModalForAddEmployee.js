import React, { Component, Fragment } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { GetNameAndSurnameOfSomeEntity } from "../../../src/globals";

class ModalForAddEmployee extends Component {
  constructor() {
    super();
    this.state = { profession: "", manager: "", physicalEntity: "", user: "" };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      profession: this.state.profession,
      manager: this.state.manager,
      physicalEntity: { id: this.state.physicalEntity },
      user: { id: this.state.user },
    };
    this.props.handleAdd(newEmployee);
  };

  render() {
    const physicalEntities = this.props.physicalEntities;
    const usersNotUsedAsForeignKeyInTableEmployee = this.props
      .usersNotUsedAsForeignKeyInTableEmployee;

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequestClose={this.props.closeModal}
        size="lg"
        centered
        animation
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h3 className="display-5 text-center">
                  Унос новог запосленог лица
                </h3>
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
                        Да ли сте менаџер?
                      </option>
                      <option value="true">Да</option>
                      <option value="false">Не</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      physicalEntities={physicalEntities}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                      placeholder="Изаберите физичко лице"
                      name="physicalEntity"
                    >
                      <option value="" selected disabled>
                        Изаберите физичко лице
                      </option>
                      {physicalEntities.map((physicalEntity) => {
                        return (
                          <option value={physicalEntity.id}>
                            {GetNameAndSurnameOfSomeEntity(physicalEntity)}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      usersNotUsedAsForeignKeyInTableEmployee={
                        usersNotUsedAsForeignKeyInTableEmployee
                      }
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                      placeholder="Изаберите корисника"
                      name="user"
                    >
                      <option value="" selected disabled>
                        Изаберите корисника
                      </option>
                      {usersNotUsedAsForeignKeyInTableEmployee.map((user) => {
                        return (
                          <option value={user.id}>
                            {GetNameAndSurnameOfSomeEntity(user)}
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
      </Modal>
    );
  }
}

export default ModalForAddEmployee;
