import React, { Component } from 'react';
import LegalEntityRow from "./LegalEntityRow"

class LegalEntityTable extends Component {
    render() {
      const legalEntities = this.props.legalEntities.map( legalEntity =>  
        <LegalEntityRow key={legalEntity.id} legalEntity = {legalEntity} />
      
      );
      
        return (
            <div>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Pib</th>
                <th scope="col">Registration number</th>
                <th scope="col">Email</th>
                <th scope="col">Statment</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
            {legalEntities}
            </tbody>
          </table>
            </div>
        )
    }
}

export default LegalEntityTable;