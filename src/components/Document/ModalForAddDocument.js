import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import classnames from 'classnames';
import {DocumentType, documentStatus} from '../../../src/globals';
import {documentModalForAddAndUpdateTranslation} from '../../translations';
import {getEmployeeName} from '../../globals';
import {handleErrorMessage} from '../../globals';

class ModalForAddDocument extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      documentType: '',
      documentStatus: 'PROCEEDING',
      employeeCreated: '',
      _case: '',
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleValidation = () => {
    let errors = {};
    let hasErrors = false;
    let {title, employeeCreated} = this.state;

    if (title.length < 2) {
      errors['title'] = 'Морате унети наслов предмета';
      hasErrors = true;
    }

    if (!employeeCreated) {
      errors['employeeCreated'] = 'Морате унети запослено лице';
      hasErrors = true;
    }

    this.setState({errors: errors});
    return hasErrors;
  };

  handleValidation = () => {
    let errors = {};
    let hasErrors = false;
    let {title, employeeCreated} = this.state;

    if (title.length < 2) {
      errors['title'] = 'Морате унети наслов предмета';
      hasErrors = true;
    }

    if (!employeeCreated) {
      errors['employeeCreated'] = 'Морате унети запослено лице';
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

    const newDocument = {
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: {id: this.state.employeeCreated},
      _case: {id: this.state._case},
    };
    this.props.handleAdd(newDocument);
  };

  render() {
    const {errors} = this.state;
    const {employeeList, caseList, show, closeModal} = this.props || {};
    const translation = documentModalForAddAndUpdateTranslation || {};
    const {Header, SelectOptionsAndPlaceholders} = translation;
    return (
      <div>
        <Modal show={show} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <h4>{Header.headingAddModal}</h4>
          </Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames('form-control', {
                          'is-invalid': errors.title,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.titlePlaceholder
                        }
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.title) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.title}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          SelectOptionsAndPlaceholders.descriptionPlaceholder
                        }
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.typePlaceholder
                        }
                        name="documentType"
                        value={this.state.documentType}
                        onChange={this.onChange}
                        style={{fontSize: '1rem'}}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.typeOption}
                        </option>
                        {Object.keys(DocumentType).map((key) => (
                          <option key={key} value={key}>
                            {DocumentType[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        placeholder={
                          SelectOptionsAndPlaceholders.statusPlaceholder
                        }
                        name="documentStatus"
                        value="PROCEEDING"
                        style={{fontSize: '1rem'}}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.statusOption}
                        </option>
                        {Object.keys(documentStatus).map((key) => (
                          <option key={key} value={key}>
                            {documentStatus[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        employeeList={employeeList}
                        className={classnames('form-control', {
                          'is-invalid': errors.employeeCreated,
                        })}
                        name="employeeCreated"
                        placeholder={
                          SelectOptionsAndPlaceholders.employeePlaceholder
                        }
                        onChange={this.onChange}
                        style={{fontSize: '1rem'}}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.employeeOption}
                        </option>
                        {employeeList.map((employee) => {
                          return (
                            <option value={employee.id}>
                              {getEmployeeName(employee)}
                            </option>
                          );
                        })}
                      </select>
                      {handleErrorMessage(errors.employeeCreated) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.employeeCreated}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        caseList={caseList}
                        name="_case"
                        placeholder={
                          SelectOptionsAndPlaceholders._casePlaceholder
                        }
                        onChange={this.onChange}
                        style={{fontSize: '1rem'}}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders._caseOption}
                        </option>
                        {caseList.map((_case) => {
                          return (
                            <option value={_case.id}>{_case.caseName}</option>
                          );
                        })}
                      </select>
                    </div>

                    <Button variant="success" type="submit">
                      <i class="fas fa-check fa-2x"></i>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </Modal>
      </div>
    );
  }
}

export default ModalForAddDocument;
