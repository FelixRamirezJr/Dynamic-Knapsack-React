import React, { Component } from 'react';

class Dynamictable extends Component {
  constructor(props){
    super(props);
    // Set the number of rows for each of the following

  }

  createArray(row,col){
    var f = new Array;
    for (var i=0;i<row;i++)
    {
     f[i] = new Array();
     for (var j=0; j<col; j++)
     {
      f[i][j]=0;
     }
    }
    return f;
  }

  max(a,b){
    return (a > b) ? a : b;
  }

  render() {
    var table = [];
    var maxWeightArray = [];
    var rows = [];
    var K = [];

    var i = 0;
    for(i = 0; i < this.props.wt.length; i++ ){
      rows.push(<tr class="value" > {this.props.val[i]} ( {this.props.wt[i]} ) </tr>);
    }
    var toMaxWeight = [];
    for(i = 0; i < this.props.maxweight; i++ ){
      maxWeightArray.push(<span> {i+1} </span>);
    }

    /* Knapsack problem */
    var K = this.createArray( this.props.val.length + 1, this.props.maxweight + 1 );

    var i = 0;
    var w = 0;

    for( i = 0; i <= this.props.val.length; i++)
    {
      for( w = 0; w <= this.props.maxweight; w++ )
      {
        if( i == 0 || w == 0)
        {
          K[i][w] = 0;

        } else if ( this.props.wt[i-1] <= w ){
          K[i][w] = this.max( this.props.val[i-1] + K[i-1][w-this.props.wt[i - 1]], K[i-1][w]  );
        } else {
          K[i][w] = K[i-1][w];
        }
      }
    }

    return (
      <div>
        <h4 className="center"> Result Table</h4>
        <div className="menu">
          {maxWeightArray}
        </div>
        <hr/>
        {
          this.props.val.map(function(values,index)
          {
            return <div className="menu"> { K[index + 1].map(function(vales){
              return <span> {vales} </span>
            }) } </div>
          })
        }
      </div>
    );
  }

}

export default Dynamictable;
