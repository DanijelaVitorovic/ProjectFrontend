import React, { Component, Fragment } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { GetNameAndSurnameOfSomeEntity } from "../../../src/globals";
import { EmployeeModalForAddAndUpdateTranslation } from "../../translations";

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
    const {
      physicalEntityList,
      usersNotUsedAsForeignKeyInTableEmployee,
      show,
      closeModal,
    } = this.props || {};
    const translation = EmployeeModalForAddAndUpdateTranslation || {};
    const { Header, SelectOptionsAndPlaceholders } = translation;

    return (
      <Modal
        show={show}
        onHide={closeModal}
        onRequestClose={closeModal}
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
                  {Header.headingAddModal}
                </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={
                        SelectOptionsAndPlaceholders.professionPlaceholder
                      }
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      placeholder={
                        SelectOptionsAndPlaceholders.managerPlaceholder
                      }
                      name="manager"
                      value={this.state.manager}
                      onChange={this.onChange}
                    >
                      <option value="" selected disabled>
                        {SelectOptionsAndPlaceholders.managerOption}
                      </option>
                      <option value="true">
                        {SelectOptionsAndPlaceholders.managerOptionTrue}
                      </option>
                      <option value="false">
                        {SelectOptionsAndPlaceholders.managerOptionFalse}
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      physicalEntityList={physicalEntityList}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                      placeholder={
                        SelectOptionsAndPlaceholders.physicalEntityPlaceholder
                      }
                      name="physicalEntity"
                    >
                      <option value="" selected disabled>
                        {SelectOptionsAndPlaceholders.physicalEntityOption}
                      </option>
                      {physicalEntityList.map((physicalEntity) => {
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
                      placeholder={SelectOptionsAndPlaceholders.userPlaceholder}
                      name="user"
                    >
                      <option value="" selected disabled>
                        {SelectOptionsAndPlaceholders.userOption}
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
