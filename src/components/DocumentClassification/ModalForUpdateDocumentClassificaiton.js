import React, {Component} from 'react';
import {Modal, Card} from 'react-bootstrap';
import classnames from 'classnames';
import {
  documentClassificationValidationsTranslation,
  modalForAddAndUpdateDocumentClassificationTranslation,
} from '../../translations';
import {handleErrorMessage} from '../../globals';

class ModalForUpdateDocumentClassificaiton extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      code: '',
      description: '',
      document: {
        id: 0,
      },
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getDocumentClassificaton(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      title,
      code,
      description,
      document,
    } = nextProps.documentClassificationForUpdate;

    this.setState({
      title,
      code,
      description,
      document,
    });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onChangeCombo = (e) => {
    this.setState({[e.target.name]: {id: e.target.value}});
  };

  handleValidation = () => {
    const translationValidation = documentClassificationValidationsTranslation;
    const {Modals} = translationValidation;

    let errors = {};
    let hasErrors = false;
    let {title, code, document} = this.state;

    if (title.length < 1) {
      errors['title'] = Modals.title;
      hasErrors = true;
    }

    if (code.length < 2) {
      errors['code'] = Modals.code;
      hasErrors = true;
    }

    if (!document) {
      errors['document'] = Modals.document;
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

    const updatedDocumentClassification = {
      id: this.props.id,
      title: this.state.title,
      code: this.state.code,
      description: this.state.description,
      document: {id: this.state.document.id},
    };
    this.props.handleUpdate(updatedDocumentClassification);
  };

  render() {
    const {show, closeModal, documentList} = this.props || {};
    const {errors} = this.state;

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
          <Modal.Header closeButton>
            <h4 className="display-5 text-center">
              {modalForAddAndUpdateDocumentClassificationTranslation.headingAdd}
            </h4>
          </Modal.Header>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <br></br>
                      <input
                        type="text"
                        className={classnames('form-control', {
                          'is-invalid': errors.title,
                        })}
                        placeholder={
                          modalForAddAndUpdateDocumentClassificationTranslation.titlePlaceholder
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
                        className={classnames('form-control', {
                          'is-invalid': errors.code,
                        })}
                        placeholder={
                          modalForAddAndUpdateDocumentClassificationTranslation.codePlaceholder
                        }
                        name="code"
                        value={this.state.code}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.code) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.code}
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
                          modalForAddAndUpdateDocumentClassificationTranslation.descriptionPlaceholder
                        }
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.description) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.description}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <select
                        documentList={documentList}
                        onChange={this.onChange}
                        className={classnames('form-control', {
                          'is-invalid': errors.document,
                        })}
                        name="document"
                      >
                        <option value="" selected disabled>
                          {
                            modalForAddAndUpdateDocumentClassificationTranslation.documentSelect
                          }
                        </option>
                        {documentList.map((document) => {
                          return (
                            <option value={document.id}>
                              {document.title}
                            </option>
                          );
                        })}
                      </select>
                      {handleErrorMessage(errors.document) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.document}
                        </span>
                      )}
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
        </Card>
      </Modal>
    );
  }
}

export default ModalForUpdateDocumentClassificaiton;
