import React, { Component } from "react";
import classnames from "classnames";
import { Modal, Button } from "react-bootstrap";
import {processTypeModalForAddAndUpdateTransaltion} from '../../translations';

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
    const {show, closeModal} = this.props || {};
    const {errors} = this.state;
    const translation = processTypeModalForAddAndUpdateTransaltion || {};
    const {Header, SelectOptionsAndPlaceholders} = translation;    
    
    return (
      <Modal show={show} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <h5>{Header.headingUpdateModal}</h5>
        </Modal.Header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames('form-control', {
                        'is-invalid': errors.type,
                      })}
                      placeholder={SelectOptionsAndPlaceholders.typePlaceholder}
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
                      className={classnames('form-control', {
                        'is-invalid': errors.description,
                      })}
                      placeholder={
                        SelectOptionsAndPlaceholders.descriptionPlaceholder
                      }
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
                  <div className="text-center">
                    <Button
                      variant="success"
                      type="submit"
                      className="col-md-2 m-auto float-right"
                    >
                      <i class="fas fa-check fa-2x"></i>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </Modal>
    );
  }
}

export default ModalForAddProcessType;
