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
    for(i = 0; i < this.props.wt.length; i++ ){
      rows.push(<tr class="value" > {this.props.val[i]} ( {this.props.wt[i]} ) </tr>);
    }

    var toMaxWeight = [];
    for(i = 0; i < this.props.W; i++ ){
      toMaxWeight.push(<th> {i} </th>);
    }

    var iMax = 5;
    var jMax = 5;
    var f = new Array();

    for (var i=0;i<iMax;i++)
    {
     f[i] = new Array();
     for (var j=0;j<jMax;j++)
     {
      f[i][j]=0;
     }
    }

    return (
      <div>
        <table>
          <tr>
            <th> Values Weight </th>
            <th> Max Weight </th>
            {toMaxWeight}
            {this.props.wt}
            {f}
          </tr>
          {rows}
        </table>
      </div>
    );
  }

}

export default Dynamictable;
