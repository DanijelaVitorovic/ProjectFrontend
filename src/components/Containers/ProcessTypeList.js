import React, { Component } from "react";
import { connect } from "react-redux";
import ProcessTypeTable from "../ProcessType/ProcessTypeTable";
import { getProcessTypes } from "../../actions/processTypeActions";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import AddProcessType from "../ProcessType/AddProcessType";
import ModalAddProcesType from "../ProcessType/ModalAddProcesType";

class ProcessTypeList extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.props.getProcessTypes();
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  
  handleClose = () => {
    this.setState({show:false});
  }

  render() {
    const { processTypes } = this.props.processType;
    const {show} = this.state.show;

    const listContent = (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-body">

              <h3>Process Type</h3>

              <Link 
              onClick={() => {
                this.handleModal();
              }}
            >
              <i className="fas fa-plus-circle fa-3x fa-pull-right"></i>
            </Link>

            <ModalAddProcesType  show={this.state.show}
            handleClose={this.handleClose}/>
         

                <ProcessTypeTable processTypes={processTypes} />

                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
    console.log(this.state.show);
    return (
      <div>
      {listContent}
      
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  processType: state.processType
});

export default connect(mapStateToProps, { getProcessTypes })(ProcessTypeList);
