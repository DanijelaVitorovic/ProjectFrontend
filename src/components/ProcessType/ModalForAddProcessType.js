import React, { Component } from "react";
import classnames from "classnames";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class ModalForAddProcessType extends Component {
  constructor() {
    super();

    this.state = {
      type: "",
      description: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newProcessType = {
      type: this.state.type,
      description: this.state.description,
      errors: {},
    };

    this.props.handleAdd(newProcessType);
  };

  render() {
    const { errors } = this.state;
    if (!this.props.show) {
      return <Redirect to="/processTypeList" />;
    }
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        onRequest={this.props.closeModal}
        size="lg"
      >
        <Modal.Header closeButton><h5>Create new Process Type</h5> </Modal.Header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
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
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <Button variant = 'success'
                    to="/processTypeList"
                    type="submit"
                  >
                  <i class="fas fa-check fa-2x"></i>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <Button
          onClick={() => {
            this.props.closeModal();
          }}
        > Close
        </Button>
      </Modal>
    );
  }
}

export default ModalForAddProcessType;
