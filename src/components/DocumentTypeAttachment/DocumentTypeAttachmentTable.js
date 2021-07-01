import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import DocumentTypeAttachmentRow from "../DocumentTypeAttachment/DocumentTypeAttachmentRow";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import {Input} from 'mdbreact';

export default class DocumentTypeAttachmentTable extends Component {
  render() {
    const {
      attachmentContent,
      uploadDocumentTypeAttachment,
      getDocumentTypeAttachmentByDocumentTypeName,
      clearDocumentTypeAttachmets,
      deleteDocumentTypeAttachment,
    } = this.props || {};

    const documentTypeAttachmentList = this.props.documentTypeAttachmentList?.map(
      (documentTypeAttachment) => (
        <DocumentTypeAttachmentRow
          key={documentTypeAttachment.id}
          documentTypeAttachment={documentTypeAttachment}
          attachmentContent={attachmentContent}
          uploadDocumentTypeAttachment={uploadDocumentTypeAttachment}
          getDocumentTypeAttachmentByDocumentTypeName={
            getDocumentTypeAttachmentByDocumentTypeName
          }
          clearDocumentTypeAttachmets={clearDocumentTypeAttachmets}
          deleteDocumentTypeAttachment={deleteDocumentTypeAttachment}
        />
      )
    );

    return (
      <div className="table-responsive tableHeight">
        <div align="left" style={{ paddingBottom: 20 }}>
          <Link to={`/documentTypeList`}>
            <Tooltip title="Назад" arrow>
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </Tooltip>
          </Link>
        </div>
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">ИД</th>
              <th scope="col">Тип</th>
              <th scope="col">Тип документа</th>
              <th scope="col">Име документа</th>
              <th scope="col" className="text-center">
                Преглед
              </th>
              <th scope="col" className="text-center">
                Брисање
              </th>
            </tr>
          </thead>
          <tbody>{documentTypeAttachmentList}</tbody>
        </table>
      </div>
    );
  }
}
