import React, { Component, Fragment } from "react";
import { Button, Badge, Alert } from "react-bootstrap";
import ModalForUpdateEmployee from "./ModalForUpdateEmployee";
import { EmployeeRowTranslation } from "../../translations";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

class EmployeeRow extends Component {
  onDeleteClick = (id) => {
    this.props.deleteEmployee(id);
  };

  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  handleUpdate = (updatedEmployee) => {
    this.props.updateEmployee(updatedEmployee);
    this.closeModal();
  };

  render() {
    const { employee, getEmployee, employeeForUpdate } = this.props || {};
    let managerType;

    if (employee.manager === true) managerType = "Да";
    else managerType = "Не";

    const translation = EmployeeRowTranslation || {};

    const row = (
      <tr>
        <td>{employee.profession}</td>
        <td>{managerType}</td>
        <td className="text-center" className="red">
        <UpdateButton showModal={this.showModal} id={document} />
      </td>
      
      <td className="text-center" className="red">
        <DeleteButton onDeleteClick={this.onDeleteClick} id={document.id} />
      </td>
      </tr>
    );

    return (
      <Fragment>
        {row}
        {this.state.show && (
          <ModalForUpdateEmployee
            show={this.state.show}
            closeModal={this.closeModal}
            handleUpdate={this.handleUpdate}
            id={employee.id}
            getEmployee={getEmployee}
            employeeForUpdate={employeeForUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default EmployeeRow;
