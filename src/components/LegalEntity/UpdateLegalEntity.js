import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createLegalEntity, getLegalEntity} from  "../../actions/legalEntityAction";
import classnames from "classnames";
import { Link } from "react-router-dom";

class UpdateLegalEntity extends Component {
    constructor() {
        super();

        this.state = {
            name:  "",
            pib: "",
            registrationNumber: "",
            email: "",
            statment: "PASSIVE",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors)  {
            this.setState({ errors: nextProps.errors });
        };

        const {
            id,
            name,
            pib,
            registrationNumber,
            email,
            statment
        } = nextProps.legalEntity;

        this.setState({
            id,
            name,
            pib,
            registrationNumber,
            email,
            statment
        });
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getLegalEntity(id, this.props.history);
    }

    onChange(e)  {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const updateLegalEntity = {
          id: this.state.id,
          name:  this.state.name,
          pib: this.state.pib,
          registrationNumber: this.state.registrationNumber,
          email: this.state.email,
          statment: this.state.statment,
          errors: {}
        };

        this.props.createLegalEntity(updateLegalEntity, this.props.history);
    }

    render() {
        const  {errors} = this.state;
        return (
            <div>
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <h5 className="display-4 text-center">Azuriraj <p></p> pravno lice</h5>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name
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
                          "is-invalid": errors.pib
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
                          "is-invalid": errors.email
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
                    <option value={2}>Select Priority</option>
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    legalEntity: state.legalEntity.legalEntity,
    errors: state.errors
});

export default connect(mapStateToProps,  {getLegalEntity, createLegalEntity})(UpdateLegalEntity);