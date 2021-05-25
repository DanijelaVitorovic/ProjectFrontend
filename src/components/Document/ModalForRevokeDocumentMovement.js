import React, {Component} from 'react';
import {modalForRevokeDocumentMovement} from '../../translations.js';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {Modal, ModalFooter, Card, Container} from 'react-bootstrap';

class ModalForRevokeDocumentMovement extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      documentNumber: '',
      externalNumber: '',
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
    const {
      id,
      title,
      documentNumber,
      externalNumber,
      description,
      documentType,
      documentStatus,
      employeeCreated,
      _case,
    } = this.props.document;

    this.setState({
      id,
      title,
      documentNumber,
      externalNumber,
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

    const {document} = this.props || {};
    this.props.resetError();
    this.props.handleRevokeDocumentMovement(document);
  };

  render() {
    const {
      showModalForRevokeDocumentMovement,
      closeModalForRevokeDocumentMovement,
      error,
    } = this.props || {};
    const translation = modalForRevokeDocumentMovement || {};
    return (
      <Modal
        show={showModalForRevokeDocumentMovement}
        onHide={closeModalForRevokeDocumentMovement}
        onRequestClose={closeModalForRevokeDocumentMovement}
        size="lg"
        centered
        animation
        closeButton
      >
        <Card bg={'white'} text={'black'} style={{paddingBottom: 20}}>
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
            <div className="container" centered style={{marginLeft: '15%'}}>
              <h4>{translation.heading}</h4>
              <div className="row">
                <div className="col-md-7 m-auto">
                  <br />
                  <form onSubmit={this.onSubmit}>
                    <Button
                      variant="contained"
                      color="default"
                      size="medium"
                      onClick={closeModalForRevokeDocumentMovement}
                    >
                      {translation.reject}
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      type="submit"
                    >
                      {translation.accept}
                    </Button>
                  </form>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    );
  }
}

export default ModalForRevokeDocumentMovement;
