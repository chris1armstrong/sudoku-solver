import React, {Component} from 'react';
import Cell from './Cell';

class Row extends Component {
  constructor(props) {
    super(props)

    var row = [];
    for(var x = 1; x < 10; x++) {
      row.push(new Cell({row:props.id,column:x}))
    }

    this.state = {
      id: props.id,
      items: row,
    }
  }

  getItem(x) {
    return this.state.items[x];
  }

  render(){
    return (
      <div className="row">
        {this.state.items.map((x) => x.render())}
      </div>
    )
  }
  }

export default Row