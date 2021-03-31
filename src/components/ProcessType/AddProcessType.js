import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {createProcessType} from "../../actions/processTypeActions";
import classnames from "classnames";


class AddProcessType extends Component {
    constructor() {
        super();

        this.state = {
            type: "",
            description: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors)  {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newProcessType = {
            
            type: this.state.type,
            description: this.state.description,
            errors: {}
        };

        this.props.createProcessType(newProcessType, this.props.history);
    }
    

    render() {
        const {errors} = this.state;
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <h5 className="display-4 text-center">
                    Create new<p></p>Process Type
                  </h5>
                  <hr />
                  <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.type,
                        })}
                        placeholder="Type"
                        name="type"
                        value={this.state.type}
                        onChange={this.onChange}
                      />
                      {errors.type && (
                        <div className="invalid-feedback">{errors.type}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.description,
                        })}
                        placeholder="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      {errors.description && (
                        <div className="invalid-feedback">{errors.description}</div>
                      )}
                    </div>
    
                    <button type="submit" className="btn btn-primary float-right">
                      <i className="fas fa-check fa-2x" />
                    </button>
    
                    <Link to={`/ProcessTypeList`}>
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

const mapStateToProps =  state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createProcessType})(AddProcessType);