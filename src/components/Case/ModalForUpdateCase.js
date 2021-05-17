import React, {Component} from 'react';
import {CaseType, getPhysicalEntityName} from '../../../src/globals';
import {Modal, ModalFooter, Card} from 'react-bootstrap';
import {
  CaseModalForAddAndUpdateTranslation,
  caseValidationsTranslation,
} from '../../translations';
import {handleErrorMessage} from '../../globals';
import classnames from 'classnames';

class ModalForUpdateCase extends Component {
  constructor() {
    super();
    this.state = {
      caseName: '',
      caseNumber: '',
      caseType: '',
      process: {
        id: 0,
      },
      refersTo: {
        id: 0,
      },
      owner: {
        id: 0,
      },
      processor: {
        id: 0,
      },
      errors: {},
    };
  }
  componentDidMount() {
    this.props.getCase(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      caseName,
      caseNumber,
      caseType,
      process,
      owner,
      processor,
      refersTo,
    } = nextProps.caseForUpdate;

    this.setState({
      caseName,
      caseNumber,
      caseType,
      process,
      owner,
      processor,
      refersTo,
    });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  handleValidation = () => {
    const translationValidation = caseValidationsTranslation;
    const {Modals} = translationValidation;

    let errors = {};
    let hasErrors = false;
    let {caseName} = this.state;

    if (caseName.length < 2) {
      errors['caseName'] = Modals.caseName;
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

    const updatedCase = {
      ...this.props._case,
      caseName: this.state.caseName,
      caseNumber: this.state.caseNumber,
      caseType: this.state.caseType,
      refersTo: {id: this.state.refersTo.id},
      processor: this.state.processor,
      owner: this.state.owner,
    };

    this.props.handleUpdate(updatedCase);
  };

  render() {
    const {physicalEntityList, show, closeModal} = this.props || {};
    const translation = CaseModalForAddAndUpdateTranslation || {};
    const {Header, SelectOptionsAndPlaceholders} = translation;
    const {errors} = this.state;
    const {processList} = this.props || {};

    return (
      <Modal
        show={show}
        onHide={closeModal}
        onRequestClose={closeModal}
        size="lg"
        centered
        animation
      >
        <Card bg={'white'} text={'black'}>
          <Modal.Header closeButton></Modal.Header>

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-5 text-center">
                    {Header.headingUpdateModal}
                  </h3>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames('form-control', {
                          'is-invalid': errors.caseName,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.caseNamePlaceholder
                        }
                        name="caseName"
                        value={this.state.caseName}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.caseName) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.caseName}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          SelectOptionsAndPlaceholders.caseNumberPlaceholder
                        }
                        name="caseNumber"
                        value={this.state.caseNumber}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        physicalEntityList={physicalEntityList}
                        onChange={this.onChangeCombo}
                        className="form-control form-control-lg"
                        name="refersTo"
                        value={this.state.refersTo.id}
                      >
                        <option value="" selected disabled>
                          Изаберите на кога се односи
                        </option>
                        {physicalEntityList.map((physicalEntity) => {
                          return (
                            <option value={physicalEntity.id}>
                              {getPhysicalEntityName(physicalEntity)}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        name="caseType"
                        value={this.state.caseType}
                        onChange={this.onChange}
                      >
                        <option value="" selected disabled>
                          Унесите тип предмета
                        </option>
                        {Object.keys(CaseType).map((key) => (
                          <option key={key} value={key}>
                            {CaseType[key].translation}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary float-right btn-success"
                    >
                      <i className="fas fa-check fa-2x" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />

          <ModalFooter></ModalFooter>
        </Card>
      </Modal>
    );
  }
}
export default ModalForUpdateCase;
