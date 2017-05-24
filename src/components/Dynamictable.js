import React, { Component } from 'react';

class Dynamictable extends Component {
  constructor(props){
    super(props);
    this.state = {name: "Felix",
                  W: props.maxweight,
                  wt: props.wt,
                  val: props.val,
                  n: props.n,
                  i: 0,
                  w: 0,
                  table: new Array([]) }
    // Set the number of rows for each of the following

  }
  render() {
    var rows = [];
    var i = 0;
    for(i = 0; i < this.state.wt.length; i++ ){
      rows.push(<tr class="value" > {this.state.val[i]} ( {this.state.wt[i]} ) </tr>);
    }

    var toMaxWeight = [];
    for(i = 0; i < this.state.W; i++ ){
      toMaxWeight.push(<th> {i} </th>);
    }

    return (
      <div>
        <h1> Real time Dynamic Programming Solution </h1>

        <table>
          <tr>
            <th> Values Weight </th>
            <th> Max Weight </th>
            {toMaxWeight}
          </tr>
          {rows}
        </table>

      </div>
    );
  }

}

export default Dynamictable;
