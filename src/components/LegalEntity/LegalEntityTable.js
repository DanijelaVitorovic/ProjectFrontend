import { Button } from 'react-bootstrap'
import React, { Component, Fragment } from 'react'
import LegalEntityRow from './LegalEntityRow'
import ModalForAddLegalEntity from './ModalForAddLegalEntity'
import { legalEntityTableTranslation } from '../../translations'
import Tooltip from '@material-ui/core/Tooltip'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import { Input } from 'mdbreact'
// import '../DocumentAttachment/input.css';
import i18next from 'i18next'

class LegalEntityTable extends Component {
  constructor() {
    super()

    this.state = {
      show: false,
      search: '',
      list: [],
      name: '',
      pib: '',
      email: '',
      statment: '',
      errors: {},
    }
  }

  onChangeSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  showModal = () => {
    this.setState({ show: true })
  }

  closeModal = () => {
    this.setState({ show: false })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAdd = (newLegalEntity) => {
    this.props.createLegalEntity(newLegalEntity)
    this.closeModal()
  }

  render() {
    const translation = legalEntityTableTranslation || {}
    const { HeaderColumns, Buttons } = translation

    const {
      legalEntityList,
      updateLegalEntity,
      getLegalEntity,
      deleteLegalEntity,
    } = this.props || {}

    const { search } = this.state
    this.state.list = legalEntityList.filter((legalEntity) => {
      return legalEntity.pib.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    const legalEntities = this.state.list.map((legalEntity) => (
      <LegalEntityRow
        key={legalEntity.id}
        legalEntity={legalEntity}
        updateLegalEntity={updateLegalEntity}
        getLegalEntity={getLegalEntity}
        legalEntityForUpdate={legalEntity}
        deleteLegalEntity={deleteLegalEntity}
      />
    ))

    const table = (
      <div>
        <div className="addAndSearch">
          <div className="first" align="left" style={{ paddingBottom: 20 }}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{ fontSize: 40 }} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.addNewLegalEntity} arrow>
              <IconButton
                className="btn btn-info"
                type="submit"
                size="lm"
                onClick={() => {
                  this.showModal()
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Input
            style={{ width: '300px' }}
            className="search"
            label="Претражи по пибу"
            icon="search"
            onChange={this.onChangeSearch}
          />
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
      </div>
    )

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
    )
  }
}

export default LegalEntityTable
