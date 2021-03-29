import React, { Component } from "react";
import UserRow from "./UserRow";

class UserTable extends Component {
  render() {
    var users = this.props.users.map(user => (
      <UserRow key={user.id} user={user} />
    ));

    return (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>Име</th>
              <th>Презиме</th>
              <th>Имејл</th>
              <th>Адреса</th>
              <th>Телефон</th>
              <th className="text-center">Активан</th> 
              <th className="text-center">Измена</th>
               <th className="text-center">Деактивација</th>
              <th className="text-center">Активација</th>
              <th className="text-center">Брисање</th> 
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
