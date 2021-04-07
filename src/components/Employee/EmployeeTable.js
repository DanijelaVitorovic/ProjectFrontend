import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmployeeRow from "./EmployeeRow";
import ModalForAddEmployee from "./ModalForAddEmployee";

class EmployeeTable extends Component {
  constructor() {
    super();
    this.state = { show: false, profession: "", manager: "" };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = (newEmployee) => {
    this.props.createEmployee(newEmployee);
    this.closeModal();
  };

  render() {
    const employees = this.props.employees.map((employee) => (
      <EmployeeRow
        key={employee.id}
        employee={employee}
        getEmployee={this.props.getEmployee}
        updateEmployee={this.props.updateEmployee}
        employeeForUpdate={this.props.employeeForUpdate}
        deleteEmployee={this.props.deleteEmployee}
      />
    ));

    const table = (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <Button
              class="btn btn-default"
              type="submit"
              variant="success"
              onClick={() => {
                this.showModal();
              }}
            >
              Унеси новог запосленог
            </Button>
            <br />
            <br />
            <tr>
              <th>Професија</th>
              <th>Менаџер</th>
              <th className="text-center">Измена</th>
              <th className="text-center">Брисање</th>
            </tr>
          </thead>
          <tbody>{employees}</tbody>
          <Link to={`/dashboard`}>
            <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
          </Link>

          <br />
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddEmployee
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
          />
        )}
      </Fragment>
    );
  }
}

export default EmployeeTable;
