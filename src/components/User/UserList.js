import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
import PropTypes from "prop-types";
//import CreateUserButton from "./CreateUserButton";
import UserTable from "./UserTable";
//import SearchFilter from "../TableReusable/SearchFilter";
import { Link } from "react-router-dom";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;
    console.log("Filtrirani1:" + users.length);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card text-left mb-3">
              <div className="card-header text-black">
                <h3>Корисници</h3>
              </div>
              <div className="card-body">
                <UserTable users={users} />
                <div id="msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
