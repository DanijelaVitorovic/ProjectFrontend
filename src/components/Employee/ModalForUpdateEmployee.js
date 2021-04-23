import React, { Component } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import {
  EmployeeModalForAddAndUpdateTranslation,
  employeeValidationsTranslation,
} from "../../translations";
import { handleErrorMessage } from "../../globals";
import classnames from "classnames";

class ModalForUpdateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      manager: "",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getEmployee(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const { id, profession, manager } = nextProps.employeeForUpdate;

    this.setState({
      id,
      profession,
      manager,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = employeeValidationsTranslation;
    const { Modals } = translationValidation;

    let errors = {};
    let hasErrors = false;
    let { profession } = this.state;

    if (profession.length < 2) {
      errors["profession"] = Modals.profession;
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

    const updatedEmployee = {
      id: this.state.id,
      profession: this.state.profession,
      manager: this.state.manager,
    };
    this.props.handleUpdate(updatedEmployee);
  };

  render() {
    const { errors } = this.state;
    const { show, closeModal } = this.props || {};
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
                  {Header.headingUpdateModal}
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
export default ModalForUpdateEmployee;
