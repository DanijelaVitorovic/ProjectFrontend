import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/employeeActions";

class EmployeeRow extends Component {
  onDeleteClick = (id) => {
    this.props.deleteEmployee(id);
  };

  render() {
    const { employee } = this.props;
    let managerType;

    if (employee.manager === true) managerType = "Da";
    else managerType = "Ne";

    return (
      <tr>
        <td>{employee.profession}</td>
        <td>{managerType}</td>
        <td className="text-center">
          <Link to={`/updateEmployee/${employee.id}`}>
            <i className="fas fa-edit fa-2x" />
          </Link>{" "}
        </td>
        <td className="text-center">
          <div onClick={() => this.onDeleteClick(employee.id)}>
            <i className="fas fa-trash-alt fa-2x" />
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteEmployee })(EmployeeRow);
