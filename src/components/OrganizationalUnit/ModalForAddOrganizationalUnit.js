import {
  Modal,
  Button,
  Row,
  Col,
  ModalFooter,
  Container,
} from "react-bootstrap";
import React, { Component } from "react";
import classnames from "classnames";
import { organizationalUnitModalForAddAndUpdateTranslation } from "../../translations";
import { handleErrorMessage } from "../../globals";
import {organizationalUnitValidationsTranslation} from '../../translations';

class ModalForAddOrganizationalUnit extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      code: "",
      legalEntity: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleValidation = () => {
    const translationValidation = organizationalUnitValidationsTranslation;
    const {Modals} = translationValidation;

    let errors = {};
    let hasErrors = false;
    let {name, code} = this.state;

    if (this.state.name.length < 2) {
      errors['name'] = Modals.name;
      hasErrors = true;
    }

    if (code.length > 6 || code.length == 0) {
      errors['code'] = Modals.code;
      hasErrors = true;
    }

    this.setState({ errors: errors });
    return hasErrors;
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      return;
    }

    const newOrganizaationalUnit = {
      name: this.state.name,
      code: this.state.code,
      legalEntity: {
        id: this.state.legalEntity,
      },
    };

    this.props.resetError();
    this.props.handleAdd(newOrganizaationalUnit);
  };

  render() {
    const { show, closeModal, legalEntityList, error } = this.props || {};
    const { errors } = this.state;

    const translation = organizationalUnitModalForAddAndUpdateTranslation || {};
    const { Header, SelectOptionsAndPlaceholders } = translation;

    return (
      <div>
        <Modal show={show} centered onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <h4>{Header.headingAddModal}</h4>
          </Modal.Header>

          {error && (
            <Container
              className="col-md-12 text-center "
              style={{paddingTop: 20}}
            >
              <div className="row">
                <div
                  className="col-md-8 m-auto"
                  style={{
                    color: 'white',
                    paddingLeft: 60,
                    paddingRight: 60,
                    background: '#EA5252',
                  }}
                >
                  {error.message}
                </div>
              </div>
            </Container>
          )}

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
                          'is-invalid': errors.name,
                        })}
                        placeholder={
                          SelectOptionsAndPlaceholders.namePlaceholder
                        }
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {handleErrorMessage(errors.name) && (
                        <span
                          className="invalid-feedback"
                          style={{fontSize: 16, color: 'red'}}
                        >
                          {errors.name}
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
                          SelectOptionsAndPlaceholders.codePlaceholder
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
                      <select
                        className="form-control form-control-lg"
                        legalEntityList={legalEntityList}
                        name="legalEntity"
                        placeholder={
                          SelectOptionsAndPlaceholders.legalEntityPlaceholder
                        }
                        onChange={this.onChange}
                        style={{fontSize: '1rem'}}
                      >
                        <option value="" selected disabled>
                          {SelectOptionsAndPlaceholders.legalEntityOption}
                        </option>
                        {legalEntityList.map((legalEntity) => {
                          return (
                            <option value={legalEntity.id}>
                              {legalEntity.name}
                            </option>
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

export default ModalForAddOrganizationalUnit;
