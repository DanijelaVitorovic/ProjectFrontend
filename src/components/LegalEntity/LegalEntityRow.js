import React, { Component } from 'react';
import {Link}  from "react-router-dom";
import {updateLegalEntity, deleteLegalEntity} from "../../actions/legalEntityAction";
import {connect} from "react-redux";

class LegalEntityRow extends Component {
    constructor(props) {
        super(props);
    }

    onDeleteClick = id => {
      this.props.deleteLegalEntity(id);
    };

    render() {
      
        return (
        <tr>
        <td>{this.props.legalEntity.id}</td>
        <td>{this.props.legalEntity.name}</td>
        <td>{this.props.legalEntity.pib}</td>
        <td>{this.props.legalEntity.registrationNumber}</td>
        <td>{this.props.legalEntity.email}</td>
        <td>{this.props.legalEntity.statment}</td>
        <td className="text-center">
        <Link to={`/updateLegalEntity/${this.props.legalEntity.id}`}>
            <i className="fas fa-edit fa-2x" />
          </Link>
        </td>
        
        <td className="text-center">
          <Link to={`/LegalEntityList`}
            id="deleteEntity"
            onClick={this.onDeleteClick.bind(this, this.props.legalEntity.id)}
          >
            <i className="fas fa-trash-alt fa-2x" />
          </Link>
        </td> 
      </tr>
    );
    }
}

const mapStateToProps = state =>  {
}

export default connect(mapStateToProps, {updateLegalEntity, deleteLegalEntity})(LegalEntityRow);