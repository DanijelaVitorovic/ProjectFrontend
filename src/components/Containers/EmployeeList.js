import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
} from "../../actions/employeeActions";
import EmployeeTable from "../Employee/EmployeeTable";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { employees, employee } = this.props.employee;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Запослена лица</h3>
              </div>
              <div className="card-body">
                <EmployeeTable
                  employees={employees}
                  createEmployee={this.props.createEmployee}
                  updateEmployee={this.props.updateEmployee}
                  getEmployee={this.props.getEmployee}
                  employeeForUpdate={employee}
                  deleteEmployee={this.props.deleteEmployee}
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
})(EmployeeList);