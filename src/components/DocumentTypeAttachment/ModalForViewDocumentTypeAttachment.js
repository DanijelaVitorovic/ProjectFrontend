import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { documentAttachmentForAddAndUpdateTranslation } from "../../translations";
import FileViewer from "react-file-viewer";

export default class ModalForViewDocumentTypeAttachment extends Component {
  constructor() {
    super();

    this.state = {
      documentTypeContent: "",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getDocumentTypeAttachmentByDocumentTypeName(
      this.props.uuidDocName
    );
  }

  componentWillReceiveProps(nextProps) {
    const { id, documentTypeContent } = nextProps.attachmentContent;

    this.setState({
      id,
      documentTypeContent,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const translation = documentAttachmentForAddAndUpdateTranslation || {};
    const { Header, SelectOptionsAndPlaceholders } = translation;
    const { attachmentContent, show, closeModal } = this.props || {};

    let url;

    if (this.props.attachmentContent.documentTypeContent) {
      const data = b64ToBlob(this.props.attachmentContent.documentTypeContent);
      url = URL.createObjectURL(data);
    } else {
      return <div></div>;
    }

    return (
      <Modal
        show={show}
        onHide={closeModal}
        size="xl"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton id="contained-modal-title-vcenter">
          <h4 className="naslov">
            <b>{SelectOptionsAndPlaceholders.title} </b>
          </h4>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {this.props.fileType == "pdf" && (
            <embed
              centered
              src={`data:application/pdf;base64,${attachmentContent.documentTypeContent}`}
              width="1100px"
              height="1000px"
              style={{ borderStyle: "1px solid gray", marginleft: "30px" }}
              type="application/pdf"
            />
          )}

          {this.props.fileType != "pdf" && (
            <FileViewer fileType={this.props.fileType} filePath={url} />
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

function b64ToBlob(b64) {
  const byteCharacters = atob(b64);

  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray]);
  return blob;
}
