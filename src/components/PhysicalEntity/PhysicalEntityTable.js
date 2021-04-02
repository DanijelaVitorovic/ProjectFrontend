import React, { Component } from "react";
import PhysicalEntityRow from "./PhysicalEntityRow";
import { Link } from "react-router-dom";

class PhysicalEntityTable extends Component {
  render() {
    const physicalEntities = this.props.physicalEntities.map(
      (physicalEntity) => (
        <PhysicalEntityRow
          key={physicalEntity.id}
          physicalEntity={physicalEntity}
        />
      )
    );
    return (
      <div className="table-responsive tableHeight">
        <table
          id="example"
          className="table table-sm table-striped table-bordered "
        >
          <thead>
            <tr>
              <th>Идентификациони број</th>
              <th>Име</th>
              <th>Презиме</th>
              <th>Име оца</th>
              <th>Професија</th>
              <th>Имејл</th>
              <th className="text-center">Адреса</th>
              <th className="text-center">Измена</th>
              <th className="text-center">Брисање</th>
            </tr>
          </thead>
          <tbody>{physicalEntities}</tbody>
          <Link to={`/physicalEntityList`}>
            <i className="fas fa-arrow-circle-left fa-3x fa-pull-left" />
          </Link>
        </table>
      </div>
    );
  }
}

export default PhysicalEntityTable;
