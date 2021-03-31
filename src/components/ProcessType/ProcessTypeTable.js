import React, { Component } from 'react';
import ProcessTypeRow from "./ProcessTypeRow";

class ProcessTypeTable extends Component {
    render() {
        const processTypes = this.props.processTypes.map( processType =>
            <ProcessTypeRow key= {processType.id} processType = {processType}/>);

        return (
            <div>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
            {processTypes}
            </tbody>
          </table>
            </div>
        )
    }
}

export default ProcessTypeTable;