import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  updatePhysicalEntity,
  getPhysicalEntity,
} from "../../actions/physicalEntityActions";

class UpdatePhysicalEntity extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      profession: "",
      email: "",
      address: {
        city: "",
        street: "",
        streetNumber: "",
        floor: "",
        apartmanNumber: "",
        zipCode: "",
      },
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      firstName,
      lastName,
      middleName,
      profession,
      email,
      address: { city, street, streetNumber, floor, apartmanNumber, zipCode },
    } = nextProps.physicalEntity;

    this.setState({
      id,
      firstName,
      lastName,
      middleName,
      profession,
      email,
      address: { city, street, streetNumber, floor, apartmanNumber, zipCode },
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPhysicalEntity(id, this.props.history);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const updatedPhysicalEntity = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      profession: this.state.profession,
      email: this.state.email,
      address: {
        city: this.state.address.city,
        street: this.state.address.street,
        streetNumber: this.state.address.streetNumber,
        floor: this.state.address.floor,
        apartmanNumber: this.state.address.apartmanNumber,
        zipCode: this.state.address.zipCode,
      },
    };
    this.props.updatePhysicalEntity(updatedPhysicalEntity, this.props.history);
  };

  render() {
    const { errors } = this.state;
    console.log(this.state);
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h5 className="display-4 text-center">Измена физичког лица</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.firstName,
                      })}
                      placeholder="Име"
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
                        "is-invalid": errors.lastName,
                      })}
                      placeholder="Презиме"
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
                      className="form-control"
                      placeholder="Име оца"
                      name="middleName"
                      value={this.state.middleName}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Занимање"
                      name="profession"
                      value={this.state.profession}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.email,
                      })}
                      placeholder="E-мејл"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.city,
                      })}
                      placeholder="Место пребивалишта"
                      name="city"
                      value={this.state.address.city}
                      onChange={this.onChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Улица"
                      name="street"
                      value={this.state.address.street}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Број улице"
                      name="streetNumber"
                      value={this.state.address.streetNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Спрат"
                      name="floor"
                      value={this.state.address.floor}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Број стана"
                      name="apartmanNumber"
                      value={this.state.address.apartmanNumber}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Поштански број"
                      name="zipCode"
                      value={this.state.address.zipCode}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    <i className="fas fa-check fa-2x" />
                  </button>

                  <Link to={`/physicalEntityList`}>
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
  physicalEntity: state.physicalEntity.physicalEntity,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getPhysicalEntity,
  updatePhysicalEntity,
})(UpdatePhysicalEntity);
