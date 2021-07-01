import React, {Component, Fragment} from 'react';
import DocumentAttachmentRow from '../DocumentAttachment/DocumentAttachmentRow';
import {documentAttachmentTableTranslation} from '../../translations';
import ModalForUploadDocumentAttachment from './ModalForUploadDocumentAttachment';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {Input} from 'mdbreact';
import "./input.css";

class DocumentAttachemntTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      search: '',
      documentAttachmentList: [],
    };
  }

  onChange = (e) => {
    this.setState({search: e.target.value});
  };

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  handleAdd = (newDocumentAttachment) => {
    this.props.uploadDocumentAttachment(newDocumentAttachment);
    this.closeModal();
  };

  render() {
    const {
      documentAttachmentList,
      attachmentContent,
      uploadDocumentAttachment,
      getDocumentAttachmentsByDocument,
      deleteDocumentAttachment,
      clearDocumentAttachmets,
      getDocumentAttachmentByDocumentName,
      id,
    } = this.props || {};

    const translation = documentAttachmentTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;
    
    const {search} = this.state;

     this.state.documentAttachmentList = documentAttachmentList.filter(
       (documentAttachment) => {
         return (
           documentAttachment.documentName
             ?.toLowerCase()
             ?.indexOf(search.toLowerCase()) !== -1
         );
       }
     );

    const documentAttachments = this.state.documentAttachmentList.map(
      (documentAttachment) => (
        <DocumentAttachmentRow
          key={documentAttachment.id}
          documentAttachment={documentAttachment}
          attachmentContent={attachmentContent}
          uploadDocumentAttachment={uploadDocumentAttachment}
          getDocumentAttachmentsByDocument={getDocumentAttachmentsByDocument}
          clearDocumentAttachmets={clearDocumentAttachmets}
          deleteDocumentAttachment={deleteDocumentAttachment}
          getDocumentAttachmentByDocumentName={
            getDocumentAttachmentByDocumentName
          }
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <div className="addAndSearch">
          <div className="first" align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.add} arrow>
              <IconButton
                className="btn btn-info"
                type="submit"
                size="lm"
                onClick={() => {
                  this.showModal();
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Input
            className="search"
            label="Претражи по имену"
            icon="search"
            onChange={this.onChange}
          />
        </div>
        <br />
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.mimeType}</th>
              <th scope="col">{HeaderColumns.document}</th>
              <th scope="col">{HeaderColumns.documentName}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.view}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{documentAttachments}</tbody>
        </table>
      </div>
    );
    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForUploadDocumentAttachment
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            id={id}
            uploadDocumentAttachment={uploadDocumentAttachment}
          />
        )}
      </Fragment>
    );
  }
}

export default DocumentAttachemntTable;
