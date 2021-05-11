import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ModalForAddDocumentType from "./ModalForAddDocumentType";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DocumentTypeRow from "./DocumentTypeRow";
import { documentTypeTableTranslation } from "../../translations";

export default class DocumentTypeTable extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.props.resetError();
    this.setState({ show: false });
  };

  handleAdd = (newDocumentType) => {
    this.props.createDocumentType(newDocumentType);
    this.closeModal();
  };

  render() {
    const {
      getDocumentType,
      updateDocumentType,
      deleteDocumentType,
      documentTypeForUpdate,
      uploadDocumentTypeAttachment,
    } = this.props || {};
    const translations = documentTypeTableTranslation;
    const { HeaderColumns, Buttons } = translations || {};

    const documentTypeList = this.props.documentTypeList?.map(
      (documentType) => (
        <DocumentTypeRow
          key={documentType.id}
          documentType={documentType}
          updateDocumentType={updateDocumentType}
          getDocumentType={getDocumentType}
          deleteDocumentType={deleteDocumentType}
          documentTypeForUpdate={documentTypeForUpdate}
          uploadDocumentTypeAttachment={uploadDocumentTypeAttachment}
        />
      )
    );

    const table = (
      <div className="table-responsive tableHeight">
        <div align="left" style={{ paddingBottom: 20 }}>
          <Link to={`/dashboard`}>
            <Tooltip title={Buttons.back} arrow>
              <ArrowBackIcon style={{ fontSize: 40 }} />
            </Tooltip>
          </Link>
          <Tooltip title={Buttons.addNew} arrow>
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

        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>{HeaderColumns.id}</th>
              <th>{HeaderColumns.name}</th>
              <th>{HeaderColumns.description}</th>
              <th className="text-center">{HeaderColumns.update}</th>
              <th className="text-center">{HeaderColumns.delete}</th>
              <th className="text-center">{HeaderColumns.attachemntList}</th>
            </tr>
          </thead>
          <tbody>{documentTypeList}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddDocumentType
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
            resetError={this.props.resetError}
          />
        )}
      </Fragment>
    );
  }
}
