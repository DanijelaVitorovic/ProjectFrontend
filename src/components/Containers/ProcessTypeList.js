import React, { Component } from 'react';
import { connect } from "react-redux";
import ProcessTypeTable from "../ProcessType/ProcessTypeTable";
import {getProcessTypes} from "../../actions/processTypeActions";
import { Link } from 'react-router-dom';
import {Button, Modal} from "react-bootstrap";
import AddProcessType from "../ProcessType/AddProcessType";

class ProcessTypeList extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }
  componentDidMount()  {
    this.props.getProcessTypes();
  }

  handleModal()  {
    this.setState({show: !this.state.show});
  }

    render() {
        const { processTypes } = this.props.processType;
        
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
                <div className="card text-left mb-3">
                  <div className="card-header text-black">
                  
                  <h3>Process Type</h3>
                  <Link onClick = {()=> {this.handleModal()}}>
                  <i class="fas fa-plus-circle fa-3x fa-pull-right"></i>
                  </Link>

                  <Modal show = {this.state.show} onHide={()=> this.handleModal()}>
                  <Modal.Header closeButton= {()=> {this.handleModal()}}><h2>Create new Process Type</h2></Modal.Header>
                  <Modal.Body>

                  <AddProcessType/>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button to={"processTypeList"}onClick={() => {this.handleModal()}}>Close</Button>
                  </Modal.Footer>
                  </Modal>
                  </div>
                  <div className="card-body">
                   <ProcessTypeTable processTypes={processTypes} />
                
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
    processType: state.processType
});

export default connect(mapStateToProps, {getProcessTypes})(ProcessTypeList);