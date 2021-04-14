import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
} from "../../actions/employeeActions";
import { getPhysicalEntities } from "../../actions/physicalEntityActions";
import EmployeeTable from "../Employee/EmployeeTable";
import { findAllUsersNotUsedAsForeignKeyInTableEmployee } from "../../actions/userActions";
import { EmployeeListTranslation } from "../../translations";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployees();
    this.props.getPhysicalEntities();
    this.props.findAllUsersNotUsedAsForeignKeyInTableEmployee();
  }

  render() {
    const { createEmployee, updateEmployee, getEmployee, deleteEmployee } =
      this.props || {};
    const { employeeList, employee } = this.props.employee || {};
    const { physicalEntityList } = this.props.physicalEntity || {};
    const { usersNotUsedAsForeignKeyInTableEmployee } = this.props.user || {};
    const translation = EmployeeListTranslation || {};
    const { Header } = translation;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>{Header.heading}</h3>
              </div>
              <div className="card-body">
                <EmployeeTable
                  employeeList={employeeList}
                  createEmployee={createEmployee}
                  updateEmployee={updateEmployee}
                  getEmployee={getEmployee}
                  employeeForUpdate={employee}
                  deleteEmployee={deleteEmployee}
                  physicalEntityList={physicalEntityList}
                  usersNotUsedAsForeignKeyInTableEmployee={
                    usersNotUsedAsForeignKeyInTableEmployee
                  }
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
  user: state.user,
  errors: state.errors,
  physicalEntity: state.physicalEntity,
});

export default connect(mapStateToProps, {
  createEmployee,
  updateEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
  getPhysicalEntities,
  findAllUsersNotUsedAsForeignKeyInTableEmployee,
})(EmployeeList);
