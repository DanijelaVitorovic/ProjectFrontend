import React, { Component, Fragment } from "react";
import { Button, Badge, Alert } from "react-bootstrap";
import ModalForUpdateEmployee from "./ModalForUpdateEmployee";

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

    const row = (
      <tr>
        <td>{employee.profession}</td>
        <td>{managerType}</td>
        <td className="text-center">
          <Button
            class="btn btn-default"
            type="submit"
            variant="outline-warning"
            onClick={() => {
              this.showModal();
            }}
          >
            Измени
          </Button>
        </td>

        <td className="text-center">
          <Badge variant="danger">
            <div onClick={() => this.onDeleteClick(employee.id)}>
              <i className="fas fa-trash-alt fa-2x" />
            </div>
          </Badge>
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
