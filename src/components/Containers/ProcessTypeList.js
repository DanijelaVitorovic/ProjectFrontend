import React, { Component } from 'react';
import { connect } from "react-redux";
import ProcessTypeTable from "../ProcessType/ProcessTypeTable";
import {getProcessTypes} from "../../actions/processTypeActions";
import { Link } from 'react-router-dom';

class ProcessTypeList extends Component {
    componentDidMount()  {
        this.props.getProcessTypes();
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
                    <Link to= "/addProcessType"> 
                    <i class="fas fa-plus-circle fa-3x fa-pull-right"></i>
                    </Link>
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