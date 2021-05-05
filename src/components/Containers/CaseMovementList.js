import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCaseMovementList,
  acceptCaseAsOwnerOrProcessor,
} from "../../actions/caseMovementActions";
import CaseMovementTable from "../CaseMovement/CaseMovementTable";

class CaseMovementList extends Component {
  componentDidMount() {
    this.props.getCaseMovementList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }

  render() {
    const { caseMovementList } = this.props.caseMovement || {};
    const { acceptCaseAsOwnerOrProcessor, error } = this.props || {};

    return (
      <div className="container" style={{ paddingTop: 10 }}>
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Kretanje predmeta</h3>
              </div>
              <div class="col-md-12 m-auto">
                <div className="card-body"></div>
                <CaseMovementTable
                  caseMovementList={caseMovementList}
                  acceptCaseAsOwnerOrProcessor={acceptCaseAsOwnerOrProcessor}
                  error={error}
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
  caseMovement: state.caseMovement,
  errors: state.error,
});

export default connect(mapStateToProps, {
  getCaseMovementList,
  acceptCaseAsOwnerOrProcessor,
})(CaseMovementList);
