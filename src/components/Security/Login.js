import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedUser.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedUser.validToken) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(LoginRequest);
  }

  render() {
    const { errors } = this.state;

    let ExpiredTrialPeriodDiv;
    const expiredTrialPeriod = errors => {
      if (errors.expired) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            {errors.expired}
          </div>
        );
      }
    };

    let AccountNotActiveDiv;
    const accountNotActive = errors => {
      if (errors.locked) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            {errors.locked}
          </div>
        );
      }
    };

    ExpiredTrialPeriodDiv = expiredTrialPeriod(errors);
    AccountNotActiveDiv = accountNotActive(errors);
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Prijava</h1>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  {AccountNotActiveDiv}
                  {ExpiredTrialPeriodDiv}
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Korisničko ime"
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
                    type="password"
                    className={classnames("form-control form-control-lg", {
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
                <button type="submit" className="btn btn-primary float-right">
                  <i class="fas fa-check fa-2x" />
                </button>

                <Link to="/">
                  <i class="fas fa-arrow-circle-left fa-3x fa-pull-left" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
