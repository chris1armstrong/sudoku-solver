import React,{Component} from 'react';

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      row: props.row,
      column: props.column,
      initialised: false,
      value: null,
    };
  }

  render(){
    return (
      <div className="cell">
        {this.state.value}
      </div>
    )
  }
}

export default Cell