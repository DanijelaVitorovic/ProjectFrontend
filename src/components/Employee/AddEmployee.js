import React, { Component } from "react";
import { createEmployee } from "../../actions/employeeActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AddEmployee extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      manager: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      profession: this.state.profession,
      manager: this.state.manager,
    };
    this.props.createEmployee(newEmployee, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h5 className="display-4 text-center">
                  Unos novog zaposlenog lica
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Unesite profesiju"
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      placeholder="Menadzer"
                      name="manager"
                      value={this.state.manager}
                      onChange={this.onChange}
                    >
                      <option value="" selected disabled>
                        Da li ste menadzer?
                      </option>
                      <option value="true">Da</option>
                      <option value="false">Ne</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    <i className="fas fa-check fa-2x" />
                  </button>
                  <Link to={`/employeeList`}>
                    <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createEmployee })(AddEmployee);
