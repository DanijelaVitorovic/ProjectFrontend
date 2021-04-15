import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, createUser } from "../../actions/userActions";
//import { getRoles } from "../../actions/roleActions";
import classnames from "classnames";
import { Link } from "react-router-dom";
//import RolesChooser from "./RolesChooser";

class UpdateUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      // confirmUseConditions: "",
      lastLoginDate: "",
      errors: {},
      roles: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.roleChanged = this.roleChanged.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      username,
      address,
      phoneNumber,
      password,
      confirmPassword,
      //confirmUseConditions,
      // clubNameUser,
      //admimAorU,
      lastLoginDate,
      operationType,
      //roles
    } = nextProps.user;

    this.setState({
      id,
      username,
      address,
      phoneNumber,
      password,
      confirmPassword,
      // confirmUseConditions,
      // clubNameUser,
      //  admimAorU,
      lastLoginDate,
      operationType,
      //roles
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id, this.props.history);
    //this.props.getRoles();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateUser = {
      id: this.state.id,
      username: this.state.username,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      // confirmUseConditions: this.state.confirmUseConditions,
      //clubNameUser: this.state.clubNameUser,
      //admimAorU: this.state.admimAorU,
      lastLoginDate: this.state.lastLoginDate,
      operationType: "UPDATE",
      // roles: this.state.roles
    };
    console.log(updateUser);
    this.props.createUser(updateUser, this.props.history);
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
                <h5 className="display-4 text-center">
                  Измена новог корисника
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.username,
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
                        "is-invalid": errors.address,
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
                        "is-invalid": errors.phoneNumber,
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
                        "is-invalid": errors.password,
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
                        "is-invalid": errors.confirmPassword,
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

UpdateUser.propTypes = {
  //getRoles: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  //availableRoles: state.role.roles,
  errors: state.errors,
});

export default connect(mapStateToProps, { getUser, createUser })(UpdateUser);
