import React, {Component} from 'react';
import Row from './Row';
import Column from './Column';
//import BigSquare from './BigSquare';

class Grid extends Component {
  constructor(props) {
    super(props);
    
    var rows = [];
    for(var y = 1; y < 10; y++) {
      rows.push(new Row({id:y}))
    };

    this.state = {
      rows:rows,
      columns:this.generateColumns(rows),
    };
    //this.generateSquares();
  }

  generateColumns(rows){
    var columns = []
    for(var x = 0; x < 9; x++) {
      columns.push(new Column());
    }

    for(x = 0; x < 9; x++) {
      for(var y = 0; y < 9; y++) {
        columns[y].add(rows[x].getItem(y))
      }
    }
    //console.log(columns)
    return columns;
  }
  /*
  generateSquares() {
    return 0;
  }*/

  render(){
    return (
      <div className="grid">
        {this.state.rows.map((x) => x.render())}
      </div>
    )
  }

}

export default Grid;