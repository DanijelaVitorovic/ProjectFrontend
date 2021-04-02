import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateEmployee, getEmployee } from "../../actions/employeeActions";

class UpdateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      manager: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    const { id, profession, manager } = nextProps.employee;

    this.setState({
      id,
      profession,
      manager,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getEmployee(id, this.props.history);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      id: this.state.id,
      profession: this.state.profession,
      manager: this.state.manager,
    };
    this.props.updateEmployee(updatedEmployee, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h5 className="display-4 text-center">
                  Izmena zaposlenog lica
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promenite profesiju"
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
                        Promenite poziciju?
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

const mapStateToProps = (state) => ({
  employee: state.employee.employee,
});

export default connect(mapStateToProps, { updateEmployee, getEmployee })(
  UpdateEmployee
);
