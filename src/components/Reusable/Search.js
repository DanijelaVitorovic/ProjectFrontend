import React, {Component} from 'react';
import {Input} from 'mdbreact';

export default class Search extends Component {
  render() {
    console.log(this.props);
    const {listState, listProps, search} = this.props || {};
    const lista = listProps.filter((e) => {
      return e.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <div>
        <Input
          className="search1"
          label="Претражи по наслову"
          icon="search"
          onChange={this.props.onChange}
        />
        {lista}
      </div>
    );
  }
}
