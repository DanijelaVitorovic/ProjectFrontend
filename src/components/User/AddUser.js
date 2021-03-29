import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";
//import { getRoles } from "../../actions/roleActions";
import classnames from "classnames";
import { Link } from "react-router-dom";
//import RolesChooser from "./RolesChooser";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
     
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    //  confirmPassword: "",
      address: "",
      phoneNumber: "",
      confirmUseConditions: true,
     // operationType: "",
      errors: {},
      roles: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.roleChanged = this.roleChanged.bind(this);
  }
  // componentDidMount() {
  //   this.props.getRoles();
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
     // clubNameUser: "USER",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      operationType: "INSERT",
      confirmUseConditions: this.state.confirmUseConditions,
      //roles: this.state.roles
    };

    this.props.createUser(newUser, this.props.history);
  }

  // roleChanged(role, isActive) {
  //   const currentRoles = this.state.roles;
  //   const newRoles = isActive
  //     ? currentRoles.concat(role)
  //     : currentRoles.filter(r => r.id !== role.id);
  //   console.log("newRoles", isActive, role, newRoles);
  //   this.setState({
  //     roles: newRoles
  //   });
  // }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h5 className="display-4 text-center">Унос новог корисника</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.firstName
                      })}
                      placeholder="Ime"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.lastName
                      })}
                      placeholder="Prezime"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.username
                      })}
                      placeholder="E-mail"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.address
                      })}
                      placeholder="Adresa"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.phoneNumber
                      })}
                      placeholder="Broj telefona"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Lozinka"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      id="confirmPassword"
                      type="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.confirmPassword
                      })}
                      placeholder="Ponovljena lozinka"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  {/* <RolesChooser
                    availableRoles={this.props.availableRoles}
                    userRoles={this.state.roles}
                    roleChanged={this.roleChanged}
                  /> */}

                  <button type="submit" className="btn btn-primary float-right">
                    <i className="fas fa-check fa-2x" />
                  </button>

                  <Link to={`/userList`}>
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

AddUser.propTypes = {
 // getRoles: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 // availableRoles: state.role.roles,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUser}
)(AddUser);
