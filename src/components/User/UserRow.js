import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteUser,
  deactivateUser,
  activateUser,
  createUser,
} from "../../actions/userActions";

var msg;
class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectMe: false,
    };
  }

  // checkPermitionForUpdate() {
  //   if (this.props.user1.user.id != this.props.user.id) {
  //     this.setErrorMessage("Ne možete menjati podatke drugih korisnika!");
  //   } else {
  //     this.setState({ redirectMe: true });
  //   }
  // }

  // onDeleteClick = id => {
  //   if (
  //     this.props.user1.user.admimAorU === "AA" ||
  //     this.props.user1.user.admimAorU === "AA-OWNER"
  //   ) {
  //     this.props.deleteUser(id);
  //   } else {
  //     this.setErrorMessage("Nemate potrebne privilegije za ovu operaciju!");
  //   }
  // };
  // onDeactivateClick = id => {
  //   if (
  //     this.props.user1.user.admimAorU === "AA" ||
  //     this.props.user1.user.admimAorU === "AA-OWNER"
  //   ) {
  //     this.props.deactivateUser(id);
  //   } else {
  //     this.setErrorMessage("Nemate potrebne privilegije za ovu operaciju!");
  //   }
  // };
  // onActivateClick = id => {
  //   if (
  //     this.props.user1.user.admimAorU === "AA" ||
  //     this.props.user1.user.admimAorU === "AA-OWNER"
  //   ) {
  //     this.props.activateUser(id);
  //   } else {
  //     this.setErrorMessage("Nemate potrebne privilegije za ovu operaciju!");
  //   }
  // };
  // setErrorMessage(msg) {
  //   this.msg = msg;
  //   document.querySelector("#msg").classList.add("alert-danger");
  //   document.querySelector("#msg").innerHTML = "<h4>" + this.msg + "</h4>";
  //   setTimeout(function() {
  //     document.querySelector("#msg").innerHTML = "";
  //   }, 3000);
  // }

  onDeactivateClick = (id) => {
    this.props.deactivateUser(id);
  };
  onActivateClick = (id) => {
    this.props.activateUser(id);
  };

  onDeleteClick = (id) => {
    this.props.deleteUser(id);
  };
  render() {
    // console.log('User row ID: '+this.props.user.id)
    // let { redirectMe } = this.state;
    // if (redirectMe) {
    //   return <Redirect to={`/updateUser/${this.props.user.id}`} />;
    // }
    return (
      <tr>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.address}</td>
        <td>{this.props.user.phoneNumber}</td>
        <td className="text-center">{this.props.user.active}</td>
        <td className="text-center">
          <Link to={`/updateUser/${this.props.user.id}`}>
            <i className="fas fa-edit fa-2x" />
          </Link>
        </td>

        <td className="text-center">
          <Link
            id="dectivateUser"
            onClick={this.onDeactivateClick.bind(this, this.props.user.id)}
          >
            <i className="fas fa-times-circle fa-2x" />
          </Link>
        </td>
        <td className="text-center">
          <Link
            id="activateUser"
            onClick={this.onActivateClick.bind(this, this.props.user.id)}
          >
            <i className="fas fa-play-circle fa-2x" />
          </Link>
        </td>
        {/* <td>
           <Link onClick={this.checkPermitionForUpdate.bind(this)}>
            <i className="fas fa-edit fa-2x" />
          </Link> 
        </td> */}
        {/* <td className="text-center">{this.props.user.active}</td> */}

        <td className="text-center">
          <Link
            id="deleteUser"
            onClick={this.onDeleteClick.bind(this, this.props.user.id)}
          >
            <i className="fas fa-trash-alt fa-2x" />
          </Link>
        </td>
      </tr>
    );
  }
}

UserRow.propTypes = {
  // user1: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  //getUsers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  // user1: state.user
});

export default connect(mapStateToProps, {
  createUser,
  deactivateUser,
  activateUser,
  deleteUser,
})(UserRow);
