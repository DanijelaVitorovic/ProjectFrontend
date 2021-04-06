import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
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
    const { employee } = this.props;
    let managerType;

    if (employee.manager === true) managerType = "Da";
    else managerType = "Ne";

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
            Izmeni
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
            id={this.props.employee.id}
            getEmployee={this.props.getEmployee}
            employeeForUpdate={this.props.employeeForUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default EmployeeRow;
