import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { documentAttachmentForAddAndUpdateTranslation } from "../../translations";

export default class ModalForUploadDocumentTypeAttachment extends Component {
  constructor() {
    super();

    this.state = {
      uploadedFile: null,
    };
  }

  onFileChange = (event) => {
    this.setState({ uploadedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append("file", this.state.uploadedFile);
    this.props.uploadDocumentTypeAttachment(formData, this.props.id);
    this.props.closeModalForUploadAttachment();
  };

  fileData = () => {
    if (this.state.uploadedFile) {
      const translation = documentAttachmentForAddAndUpdateTranslation || {};
      const { SelectOptionsAndPlaceholders } = translation;
      const firstIndex = this.state.uploadedFile?.type.lastIndexOf(".") + 1;
      const lastIndex = this.state.uploadedFile?.type.length;
      const fileName = this.state.uploadedFile?.name;
      const fileType = this.state.uploadedFile?.type.substring(
        firstIndex,
        lastIndex
      );
      let fileSize = this.state.uploadedFile?.size;

      return (
        <div>
          <h3>{SelectOptionsAndPlaceholders.details}</h3>
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
          <p>
            {SelectOptionsAndPlaceholders.size} {formatSizeUnits(fileSize)}
          </p>
        </div>
      );
    } else {
      const translation = documentAttachmentForAddAndUpdateTranslation || {};
      const { SelectOptionsAndPlaceholders } = translation;
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
    const { Header, Buttons } = translation;
    const { showModalForUpload, closeModalForUploadAttachment } =
      this.props || {};

    return (
      <Modal
        show={showModalForUpload}
        onHide={closeModalForUploadAttachment}
        size="lg"
        centered
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton id="contained-modal-title-vcenter">
          <h4 className="title">
            <b>{Header.headingAddModal} </b>
          </h4>
        </Modal.Header>
        <br></br>
        <div className="register" style={{ paddingBottom: 30 }}>
          <div className="container">
            {this.fileData()}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="text-white">{Buttons.upload}</label>
                <input
                  type="file"
                  className="form-control"
                  name="upload_file"
                  onChange={this.onFileChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <Button type="submit" onClick={() => this.onFileUpload()}>
                  {Buttons.save}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

function formatSizeUnits(fileSize) {
  if (fileSize >= 1073741824) {
    fileSize = (fileSize / 1073741824).toFixed(2) + " GB";
  } else if (fileSize >= 1048576) {
    fileSize = (fileSize / 1048576).toFixed(2) + " MB";
  } else if (fileSize >= 1024) {
    fileSize = (fileSize / 1024).toFixed(2) + " KB";
  } else if (fileSize > 1) {
    fileSize = fileSize + " fileSize";
  } else if (fileSize == 1) {
    fileSize = fileSize + " byte";
  } else {
    fileSize = "0 fileSize";
  }
  return fileSize;
}
