import React, {Component} from 'react';
import {connect} from 'react-redux';
import LegalEntityTable from '../LegalEntity/LegalEntityTable';
import {
  getLegalEntity,
  getLegalEntites,
  createLegalEntity,
  deleteLegalEntity,
  updateLegalEntity,
} from '../../actions/legalEntityAction';
import {legalEntityListTranslation} from '../../translations';
import i18next from 'i18next';

class LegalEntityList extends Component {
  componentDidMount() {
    this.props.getLegalEntites();
  }

  render() {
    const {legalEntityList} = this.props.legalEntity || {};
    const {
      createLegalEntity,
      updateLegalEntity,
      getLegalEntity,
      deleteLegalEntity,
    } = this.props || {};
        const translation = legalEntityListTranslation;
    const {Header} = translation;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-body">
                <h3> {i18next.t('legalEntityListTranslation')}</h3>
                <LegalEntityTable
                  legalEntityList={legalEntityList}
                  createLegalEntity={createLegalEntity}
                  updateLegalEntity={updateLegalEntity}
                  getLegalEntity={getLegalEntity}
                  deleteLegalEntity={deleteLegalEntity}
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
  legalEntity: state.legalEntity,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getLegalEntity,
  getLegalEntites,
  createLegalEntity,
  deleteLegalEntity,
  updateLegalEntity,
})(LegalEntityList);
