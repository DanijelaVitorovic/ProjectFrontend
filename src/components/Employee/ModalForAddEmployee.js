import React, { Component, Fragment } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { getPhysicalEntityName } from "../../../src/globals";
import {
  EmployeeModalForAddAndUpdateTranslation,
  employeeValidationsTranslation,
} from "../../translations";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";

class ModalForAddEmployee extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      manager: "",
      physicalEntity: "",
      user: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = employeeValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { profession, physicalEntity, user } = this.state;

    if (profession.length < 2) {
      errors["profession"] = Modals.profession;
      hasErrors = true;
    }

    if (!physicalEntity) {
      errors["physicalEntity"] = Modals.physicalEntity;
      hasErrors = true;
    }

    if (!user) {
      errors["user"] = Modals.user;
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

    const newEmployee = {
      profession: this.state.profession,
      manager: this.state.manager,
      physicalEntity: { id: this.state.physicalEntity },
      user: { id: this.state.user },
    };
    this.props.handleAdd(newEmployee);
  };

  render() {
    const { errors } = this.state;
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
              <div className="col-md-8 m-auto" style={{ paddingBottom: 20 }}>
                <h3 className="display-5 text-center">
                  {Header.headingAddModal}
                </h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.profession,
                      })}
                      placeholder={
                        SelectOptionsAndPlaceholders.professionPlaceholder
                      }
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                    {handleErrorMessage(errors.profession) && (
                      <span
                        className="invalid-feedback"
                        style={{ fontSize: 16, color: "red" }}
                      >
                        {errors.profession}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
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
                      className={classnames("form-control", {
                        "is-invalid": errors.physicalEntity,
                      })}
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
                            {getPhysicalEntityName(physicalEntity)}
                          </option>
                        );
                      })}
                    </select>
                    {handleErrorMessage(errors.physicalEntity) && (
                      <span
                        className="invalid-feedback"
                        style={{ fontSize: 16, color: "red" }}
                      >
                        {errors.physicalEntity}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <select
                      usersNotUsedAsForeignKeyInTableEmployee={
                        usersNotUsedAsForeignKeyInTableEmployee
                      }
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": errors.user,
                      })}
                      placeholder={SelectOptionsAndPlaceholders.userPlaceholder}
                      name="user"
                    >
                      <option value="" selected disabled>
                        {SelectOptionsAndPlaceholders.userOption}
                      </option>
                      {usersNotUsedAsForeignKeyInTableEmployee.map((user) => {
                        return <option value={user.id}>{user.username}</option>;
                      })}
                    </select>
                    {handleErrorMessage(errors.user) && (
                      <span
                        className="invalid-feedback"
                        style={{ fontSize: 16, color: "red" }}
                      >
                        {errors.user}
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary float-right btn-success"
                    >
                      <i className="fas fa-check fa-2x" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalForAddEmployee;
