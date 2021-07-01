import React, {Component} from 'react';
import classnames from 'classnames';
import {Modal, Button} from 'react-bootstrap';
import {handleErrorMessage} from '../../globals';
import {
  processTypeModalForAddAndUpdateTransaltion,
  processTypeValidationsTranslation,
} from '../../translations';

class ModalForAddProcessType extends Component {
  constructor() {
    super();

    this.state = {
      type: '',
      description: '',
      deadline: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleValidation = () => {
    const translationValidation = processTypeValidationsTranslation;
    const {Modals} = translationValidation;

    let errors = {};
    let hasErrors = false;
    let {type} = this.state;

    if (type.length < 2) {
      errors['type'] = Modals.type;
      hasErrors = true;
    }

    this.setState({errors: errors});
    return hasErrors;
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      return;
    }

    const newProcessType = {
      type: this.state.type,
      description: this.state.description,
      deadline: this.state.deadline,
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
      <Modal show={show} centered onHide={closeModal} size="lg">
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
                    {handleErrorMessage(errors.type) && (
                      <span
                        className="invalid-feedback"
                        style={{fontSize: 16, color: 'red'}}
                      >
                        {errors.type}
                      </span>
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

                  <div className="form-group">
                    <input
                      type="text"
                      name="deadline"
                      value={this.state.deadline}
                      placeholder={
                        SelectOptionsAndPlaceholders.deadlinePlaceholder
                      }
                      className="form-control"
                      onChange={this.onChange}
                    />
                    {errors.deadline && (
                      <div className="invalid-feedback">{errors.deadline}</div>
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
