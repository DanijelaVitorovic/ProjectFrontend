import React, {Component, Fragment} from 'react';
import ProcessRow from './ProcessRow';
import {Button} from 'react-bootstrap';
import ModalForAddProcess from './ModalForAddProcess';
import {processTableTranslation} from '../../translations';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

class ProcessTable extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
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

  handleAdd = (newProcess) => {
    this.props.createProcess(newProcess);
    this.closeModal();
  };

  render() {
    const translation = processTableTranslation;
    const {HeaderColumns, Buttons} = translation || {};
    const {
      processList,
      getProcess,
      updateProcess,
      deleteProcess,
      processTypeList,
      getProcessTypes,
      process,
    } = this.props || {};
    const processes = processList.map((process) => (
      <ProcessRow
        key={process.id}
        process={process}
        getProcess={getProcess}
        updateProcess={updateProcess}
        deleteProcess={deleteProcess}
        processTypeList={processTypeList}
        getProcessTypes={getProcessTypes}
      />
    ));
    const table = (
      <div className="table-responsive tableHeight">
              <br></br>
        <Fragment>
          <div align="left" style={{paddingBottom: 20}}>
            <Link to={`/dashboard`}>
              <Tooltip title={Buttons.back} arrow>
                <ArrowBackIcon style={{fontSize: 40}} />
              </Tooltip>
            </Link>

            <Tooltip title={Buttons.addNewProcess} arrow>
              <IconButton
                className="btn btn-info"
                type="submit"
                size="lm"
                onClick={() => {
                  this.showModalForAddCaseAndDocument();
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Fragment>
        <table id="example" className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
              <th scope="col">{HeaderColumns.id}</th>
              <th scope="col">{HeaderColumns.processType}</th>
              <th scope="col">{HeaderColumns.descriptionType}</th>
              <th scope="col">{HeaderColumns.status}</th>
              <th scope="col" className="text-center">
                {HeaderColumns.update}
              </th>
              <th scope="col" className="text-center">
                {HeaderColumns.delete}
              </th>
            </tr>
          </thead>
          <tbody>{processes}</tbody>
        </table>
      </div>
    );

    return (
      <Fragment>
        {table}
        {this.state.show && (
          <ModalForAddProcess
            show={this.state.show}
            handleAdd={this.handleAdd}
            closeModal={this.closeModal}
            processTypeList={processTypeList}
            process={process}
          />
        )}
      </Fragment>
    );
  }
}

export default ProcessTable;
