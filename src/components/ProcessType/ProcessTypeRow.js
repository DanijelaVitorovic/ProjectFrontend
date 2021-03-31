import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link}  from "react-router-dom";
import {updateProcessType, deleteProcessType} from "../../actions/processTypeActions";

class ProcessTypeRow extends Component {
    constructor(props)  {
        super(props);
    }

    onDeleteClick = (id) => {
        this.props.deleteProcessType(id);
    };

    render() {
        return (
            <tr>
            <td>{this.props.processType.id}</td>
            <td>{this.props.processType.type}</td>
            <td>{this.props.processType.description}</td>
            <td className="text-center">
            <Link to={`/updateProcessType/${this.props.processType.id}`}>
                <i className="fas fa-edit fa-2x" />
              </Link>
            </td>
            
            <td className="text-center">
              <Link to={`/processTypeList`}
                id="deleteEntity"
                onClick={this.onDeleteClick.bind(this, this.props.processType.id, this.props.history)}
              >
                <i className="fas fa-trash-alt fa-2x" />
              </Link>
            </td> 
          </tr>
        );
    }
}

const mapStateToProps =  state => {
  
};

export default connect(null, {updateProcessType, deleteProcessType})(ProcessTypeRow);