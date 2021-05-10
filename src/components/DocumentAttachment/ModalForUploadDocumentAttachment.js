import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {documentAttachmentForAddAndUpdateTranslation} from '../../translations';

class ModalForUploadDocumentAttachment extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  state = {
    uploadedFile: null,
  };

  onFileChange = (event) => {
    this.setState({uploadedFile: event.target.files[0]});
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append('file', this.state.uploadedFile);

    const {id} = this.props;

    this.props.uploadDocumentAttachment(formData, id);
    this.props.closeModal();
  };

  fileData = () => {
    if (this.state.uploadedFile) {
      const translation = documentAttachmentForAddAndUpdateTranslation || {};
      const {SelectOptionsAndPlaceholders} = translation;
      const firstIndex = this.state.uploadedFile?.type.lastIndexOf('.') + 1;
      const lastIndex = this.state.uploadedFile?.type.length;
      const fileName = this.state.uploadedFile?.name;
      const fileType = this.state.uploadedFile?.type.substring(
        firstIndex,
        lastIndex
      );
      return (
        <div>
          <br></br>
          <h2>{SelectOptionsAndPlaceholders.details}</h2>
          <p>
            {SelectOptionsAndPlaceholders.name}
            {fileName}
          </p>
          <p>
            {SelectOptionsAndPlaceholders.type}
            {fileType}
          </p>
          <p>
            {SelectOptionsAndPlaceholders.lastChange}
            {this.state.uploadedFile?.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      );
    } else {
      const translation = documentAttachmentForAddAndUpdateTranslation || {};
      const {SelectOptionsAndPlaceholders} = translation;
      return (
        <div>
          <br />
          <h5 className="col-md-9 m-auto">
            <b>{SelectOptionsAndPlaceholders.info} </b>
          </h5>
        </div>
      );
    }
  };

  render() {
    const translation = documentAttachmentForAddAndUpdateTranslation || {};
    const {Header, Buttons} = translation;
    const {show, closeModal} = this.props || {};

    return (
      <Modal show={show} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton id="contained-modal-title-vcenter">
          <h4 className="title">
            <b>{Header.headingAddModal}</b>
          </h4>
        </Modal.Header>
        <br></br>
        <div className="register">
          <div className="container">
            <div variant="success" className="col-md-4 m-auto">
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={this.onFileChange}
              />
              <label for="file">{Buttons.upload}</label>
            </div>
            <br></br>
            <div className="col-md-4 m-auto">
              <button className="upload" onClick={this.onFileUpload}>
                {Buttons.save}
              </button>
            </div>
            {this.fileData()}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalForUploadDocumentAttachment;
