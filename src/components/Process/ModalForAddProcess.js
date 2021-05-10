import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import classnames from "classnames";
import {processModalForAddAndUpdateTransaltion} from "../../translations";

class ModalForAddProcess extends Component {
  constructor() {
    super();

    this.state = {
      nextCaseStatus: "",
      processType: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newProcess = {
      nextCaseStatus: this.state.nextCaseStatus,
      processType: { id: this.state.processType },
      errors: {},
    };

    this.props.handleAdd(newProcess);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    const {processTypeList, show, closeModal} = this.props || {};
    const translation = processModalForAddAndUpdateTransaltion;
    const {Header, SelectOptionsAndPlaceholders} = translation;
    return (
      <Modal show={show} centered onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <h5>{Header.headingAddModal}</h5>{' '}
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
                        'is-invalid': errors.nextCaseStatus,
                      })}
                      placeholder={
                        SelectOptionsAndPlaceholders.statusPlaceholder
                      }
                      name="nextCaseStatus"
                      value={this.state.nextCaseStatus}
                      onChange={this.onChange}
                    />
                    {errors.nextCaseStatus && (
                      <div className="invalid-feedback">
                        {errors.nextCaseStatus}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      processTypeList={processTypeList}
                      name="processType"
                      placeholder={SelectOptionsAndPlaceholders.typePlaceholder}
                      onChange={this.onChange}
                      style={{fontSize: '1rem'}}
                      value={this.state.processType.id}
                    >
                      <option value="" selected disabled>
                        {SelectOptionsAndPlaceholders.typeOption}
                      </option>
                      {processTypeList.map((processType) => {
                        return (
                          <option value={processType.id}>
                            {processType.type}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="text-center">
                    <Button variant="success" type="submit">
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

export default ModalForAddProcess;
