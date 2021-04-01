import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class EmployeeRow extends Component {
  render() {
    const { employee } = this.props.employee;
    return <tr></tr>;
  }
}

export default EmployeeRow;
