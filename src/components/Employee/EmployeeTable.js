import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeRow from "./EmployeeRow";

class EmployeeTable extends Component {
  render() {
    const employees = this.props.employees.map((employee) => (
      <EmployeeRow key={employee.id} employee={employee} />
    ));

    return (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
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
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
