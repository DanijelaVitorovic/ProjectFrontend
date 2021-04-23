import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmployeeRow from "./EmployeeRow";
import ModalForAddEmployee from "./ModalForAddEmployee";
import { EmployeeTableTranslation } from "../../translations";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

class EmployeeTable extends Component {
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = (newEmployee) => {
    this.props.createEmployee(newEmployee);
    this.closeModal();
  };

  render() {
    const {
      employeeList,
      getEmployee,
      updateEmployee,
      employeeForUpdate,
      deleteEmployee,
      physicalEntityList,
      usersNotUsedAsForeignKeyInTableEmployee,
    } = this.props || {};
    const translation = EmployeeTableTranslation || {};
    const { HeaderColumns, Buttons } = translation;

    const employeeListShowedInRow = employeeList.map((employee) => (
      <EmployeeRow
        key={employee.id}
        employee={employee}
        getEmployee={getEmployee}
        updateEmployee={updateEmployee}
        employeeForUpdate={employeeForUpdate}
        deleteEmployee={deleteEmployee}
      />
    ));

    const table = (
      <div className="table-responsive tableHeight">
        <div align="left" style={{ paddingBottom: 20 }}>
          <Link to={`/dashboard`}>
            <Tooltip title={Buttons.back} arrow>
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </Tooltip>
          </Link>

          <Tooltip title={Buttons.addNewEmployee} arrow>
            <IconButton
              className="btn btn-info"
              type="submit"
              size="lm"
              onClick={() => {
                this.showModal();
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>{HeaderColumns.profession}</th>
              <th>{HeaderColumns.manager}</th>
              <th className="text-center">{HeaderColumns.update}</th>
              <th className="text-center">{HeaderColumns.delete}</th>
            </tr>
          </thead>
          <tbody>{employeeListShowedInRow}</tbody>
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
            physicalEntityList={physicalEntityList}
            usersNotUsedAsForeignKeyInTableEmployee={
              usersNotUsedAsForeignKeyInTableEmployee
            }
          />
        )}
      </Fragment>
    );
  }
}

export default EmployeeTable;
