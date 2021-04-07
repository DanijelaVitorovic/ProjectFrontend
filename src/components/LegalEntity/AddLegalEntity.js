import React, { Component } from "react";
import { connect } from "react-redux";
import { createLegalEntity } from "../../actions/legalEntityAction";
import classnames from "classnames";
import { Link } from "react-router-dom";

class AddLegalEntity extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      pib: "",
      email: "",
      statment: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

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

    const newLegalEntity = {
      name: this.state.name,
      pib: this.state.pib,
      email: this.state.email,
      statment: this.state.statment,
      errors: {},
    };

    this.props.createLegalEntity(newLegalEntity, this.props.history);
  }

  render() {
    const { errors } = this.state;
    
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h5 className="display-4 text-center">
                Unos novog<p></p> pravnog lica
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Ime"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.pib,
                    })}
                    placeholder="Prezime"
                    name="pib"
                    value={this.state.pib}
                    onChange={this.onChange}
                  />
                  {errors.pib && (
                    <div className="invalid-feedback">{errors.pib}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="E-mail"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                
                <div className="form-group">
                
                  <select
                    className="form-control form-control-lg"
                    name="statment"
                    value={this.state.statment}
                    onChange={this.onChange}
                  >
                    <option value={1}>Select Priority</option>
                    <option value={0}>ACTIVE</option>
                    <option value={1}>PASSIVE</option>
                  </select>

                  {errors.statment && (
                    <div className="invalid-feedback">{errors.statment}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary float-right">
                  <i className="fas fa-check fa-2x" />
                </button>

                <Link to={`/LegalEntityList`}>
                  <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createLegalEntity })(AddLegalEntity);
