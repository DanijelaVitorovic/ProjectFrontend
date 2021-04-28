import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import classnames from 'classnames';
import {DocumentType, documentStatus} from '../../../src/globals';
import {getEmployeeName} from '../../globals';
import {documentModalForAddAndUpdateTranslation} from '../../translations';

export default class ModalForUpdateDocument extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      documentType: '',
      documentStatus: '',
      employeeCreated: {
        id: 0,
      },
      _case: {
        id: 0,
      },
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getDocument(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }

    const {
      id,
      title,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      _case,
    } = nextProps.documentForUpdate;

    this.setState({
      id,
      title,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      _case,
    });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const updatedDocument = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      documentType: this.state.documentType,
      documentStatus: this.state.documentStatus,
      employeeCreated: {
        id: this.state.employeeCreated.id,
      },
      _case: {
        id: this.state._case.id,
      },
    };
    this.props.handleUpdate(updatedDocument);
  };

  render() {
    const {errors} = this.state;
    const {employeeList, caseList, show, closeModal} = this.props || {};
    const translation = documentModalForAddAndUpdateTranslation;
    const {Header, SelectOptionsAndPlaceholders} = translation;
    return (
      <div>
        <Modal show={show} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <h4>{Header.headingUpdateModal}</h4>
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
                      {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
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
                        value={this.state.documentStatus}
                        onChange={this.onChange}
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
                        name="employeeCreated"
                        placeholder={
                          SelectOptionsAndPlaceholders.employeePlaceholder
                        }
                        onChange={this.onChangeCombo}
                        value={this.state?.employeeCreated?.id}
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
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        caseList={caseList}
                        name="_case"
                        placeholder={
                          SelectOptionsAndPlaceholders._casePlaceholder
                        }
                        onChange={this.onChangeCombo}
                        value={this.state._case.id}
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
