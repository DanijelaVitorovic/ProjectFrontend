import {Button} from 'react-bootstrap';
import React, {Component, Fragment} from 'react';
import LegalEntityRow from './LegalEntityRow';
import ModalForAddLegalEntity from './ModalForAddLegalEntity';
import {legalEntityTableTranslation} from '../../translations';

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
      <table className="table table-hover ">
        <thead class="thead-light">
          <Button
            className="btn btn-default"
            variant="info"
            type="submit"
            onClick={() => {
              this.showModal();
            }}
          >
            {Buttons.addNewLegalEntity}
          </Button>
          <p></p>
          <tr>
            <th scope="col">{HeaderColumns.id}</th>
            <th scope="col">{HeaderColumns.name}</th>
            <th scope="col">{HeaderColumns.pib}</th>
            <th scope="col">{HeaderColumns.registrationNumber}</th>
            <th scope="col">{HeaderColumns.email}</th>
            <th scope="col">{HeaderColumns.email}</th>
            <th scope="col">{HeaderColumns.update}</th>
            <th scope="col">{HeaderColumns.delete}</th>
          </tr>
        </thead>

        <tbody>{legalEntities}</tbody>
      </table>
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
