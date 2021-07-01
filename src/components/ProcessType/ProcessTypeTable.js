import React, {Component, Fragment} from 'react';
import ProcessTypeRow from './ProcessTypeRow';
import {Modal, Button} from 'react-bootstrap';
import {times} from 'lodash';
import ModalForAddProcessType from './ModalForAddProcessType';
import {processTypeTableTranslation} from '../../translations';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {Input} from 'mdbreact';
import '../DocumentAttachment/input.css';

class ProcessTypeTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      search: '',
      list: [],
      type: '',
      description: '',
      errors: {},
    };
  }

  onChangeSearch = (e) => {
    this.setState({search: e.target.value});
  };

  showModal = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAdd = (newProcessType) => {
    this.props.createProcessType(newProcessType);
    this.closeModal();
  };

  render() {
    const {
      processTypeList,
      createProcessType,
      getProcessType,
      updateProcessType,
      deleteProcessType,
    } = this.props || {};

    const translation = processTypeTableTranslation || {};
    const {HeaderColumns, Buttons} = translation;

    const {search} = this.state;

    this.state.list = processTypeList.filter((processType) => {
      return (
        processType.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    const processTypes = this.state.list.map((processType) => (
      <ProcessTypeRow
        key={processType.id}
        processType={processType}
        getProcessType={getProcessType}
        createProcessType={createProcessType}
        updateProcessType={updateProcessType}
        deleteProcessType={deleteProcessType}
      />
    ));

    const table = (
      <div>
        <div className="addAndSearch">
          <div className="first" align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.addNewProcessType} arrow>
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
            style={{width: '300px'}}
            className="search"
            label="Претражи по типу"
            icon="search"
            onChange={this.onChangeSearch}
          />
        </div>
        <table className="table table-hover">
          <thead class="thead-light">
            <tr className=" card-body">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.type}</th>
              <th scope="col">{HeaderColumns.description}</th>
              <th scope="col">{HeaderColumns.deadline}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>

          <tbody>{processTypes}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddProcessType
            show={this.state.show}
            closeModal={this.closeModal}
            handleAdd={this.handleAdd}
            processTypeList={processTypeList}
            createProcessType={createProcessType}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTypeTable;
