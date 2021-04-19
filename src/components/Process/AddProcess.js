import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {createProcess} from "../../actions/processActions";
import classnames from "classnames";

class AddProcess extends Component {
    constructor() {
        super();

        this.state = {
            nextCaseStatus: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors)  {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newProcess = {
            nextCaseStatus: this.state.nextCaseStatus,
            errors: {}
        };

        this.props.createProcess(newProcess, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <h5 className="display-4 text-center">Create new Process</h5>
                  <hr />
                  <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.nextCaseStatus
                        })}
                        placeholder="Next Case Status"
                        name="nextCaseStatus"
                        value={this.state.nextCaseStatus}
                        onChange={this.onChange}
                      />
                      {errors.nextCaseStatus && (
                        <div className="invalid-feedback">{errors.nextCaseStatus}</div>
                      )}
                    </div>

                    <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="priority"
                      value={this.state.priority}
                      onChange={this.onChange}
                    >
                      <option value={0}>Select</option>
                      <option value={1}>aaaa</option>
                      <option value={2}>bbbb</option>
                      <option value={3}>cccc</option>
                    </select>
                  </div> 
                  
                    <button type="submit" className="btn btn-primary float-right">
                      <i className="fas fa-check fa-2x" />
                    </button>
  
                    <Link to={`/processList`}>
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

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createProcess})(AddProcess);