import {map} from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  getDocumentMovementList,
  acceptDocument,
} from '../../actions/documentMovementActions';
import {
  documentAttachmentListTranslation,
  documentMovementListTranslation,
} from '../../translations';
import DocumentMovementTable from '../DocumentMovement/DocumentMovementTable';

class DocumentMovementList extends Component {
  componentDidMount() {
    this.props.getDocumentMovementList();
  }

  render() {
    const {acceptDocument} = this.props || {};

    const translation = documentMovementListTranslation || {};
    const {Header} = translation;

    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3 success">
              <div className="card-header text-black ">
                <h3>{Header.heading}</h3>
              </div>
              <div className="card-body">
                <DocumentMovementTable
                  documentMovementList={
                    this.props.documentMovement.documentMovementList
                  }
                  acceptDocument={acceptDocument}
                />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  documentMovement: state.documentMovement,
  errors: state.error,
});

export default connect(mapStateToProps, {
  getDocumentMovementList,
  acceptDocument,
})(DocumentMovementList);
