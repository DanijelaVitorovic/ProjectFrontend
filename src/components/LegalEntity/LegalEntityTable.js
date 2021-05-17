import {Button} from 'react-bootstrap';
import React, {Component, Fragment} from 'react';
import LegalEntityRow from './LegalEntityRow';
import ModalForAddLegalEntity from './ModalForAddLegalEntity';
import {legalEntityTableTranslation} from '../../translations';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

class LegalEntityTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      name: '',
      pib: '',
      email: '',
      statment: '',
      errors: {},
    };
  }

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAdd = (newLegalEntity) => {
    this.props.createLegalEntity(newLegalEntity);
    this.closeModal();
  };

  render() {
    const translation = legalEntityTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;
    const {
      legalEntityList,
      updateLegalEntity,
      getLegalEntity,
      deleteLegalEntity,
    } = this.props || {};
    const legalEntities = legalEntityList.map((legalEntity) => (
      <LegalEntityRow
        key={legalEntity.id}
        legalEntity={legalEntity}
        updateLegalEntity={updateLegalEntity}
        getLegalEntity={getLegalEntity}
        legalEntityForUpdate={legalEntity}
        deleteLegalEntity={deleteLegalEntity}
      />
    ));

    const table = (
      <div>
        <Fragment>
          <div align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.addNewLegalEntity} arrow>
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
        </Fragment>
        <table className="table table-hover ">
          <thead class="thead-light">
            <tr>
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.name}</th>
              <th scope="col">{HeaderColumns.pib}</th>
              <th scope="col">{HeaderColumns.email}</th>
              <th scope="col">{HeaderColumns.email}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>

          <tbody>{legalEntities}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddLegalEntity
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
          />
        )}
      </Fragment>
    );
  }
}

export default LegalEntityTable;
