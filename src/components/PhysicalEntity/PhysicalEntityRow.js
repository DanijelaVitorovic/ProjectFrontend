import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePhysicalEntity } from "../../actions/physicalEntityActions";
import { Link } from "react-router-dom";

class PhysicalEntityRow extends Component {
  onDeleteClick = (id) => {
    this.props.deletePhysicalEntity(id);
  };

  constructor(props) {
    super(props);
    this.state = { physicalEntities: [], isLoading: true };
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  render() {
    console.log(this.props.physicalEntity);
    return (
      <tr>
        <td>{this.props.physicalEntity.identificationNumber}</td>
        <td>{this.props.physicalEntity.firstName}</td>
        <td>{this.props.physicalEntity.lastName}</td>
        <td>{this.props.physicalEntity.middleName}</td>
        <td>{this.props.physicalEntity.profession}</td>
        <td>{this.props.physicalEntity.email}</td>
        <td>{this.props.physicalEntity.address.city}</td>
        <td className="text-center">
          <Link to={`/updatePhysicalEntity/${this.props.physicalEntity.id}`}>
            <i className="fas fa-edit fa-2x" />
          </Link>{" "}
        </td>
        <td className="text-center">
          <div onClick={() => this.onDeleteClick(this.props.physicalEntity.id)}>
            <i className="fas fa-trash-alt fa-2x" />
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deletePhysicalEntity })(PhysicalEntityRow);
