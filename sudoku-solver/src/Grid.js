import React, {Component} from 'react';
import Cell from './Cell';

const Row = (y) => {
  var row = [];
  for(var x = 1; x < 10; x++) {
    row.push(new Cell({row:y,column:x}))
  }
  return (
    <div className="row">
      {
        row.map((x) => x.render())
      }
    </div>
  )
}

class Grid extends Component {
  render(){
    var ll = []
    for(var y = 1; y < 10; y++) {
      ll.push(Row(y))
    }
    return (
      <div className="grid">
      {ll}
      </div>
    )
  }

}

export default Grid;