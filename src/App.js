import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dynamictable from './components/Dynamictable';
import Errors from './components/Errors';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxweight: 9,
      wt: [1,3,4],
      val: [1,4,5],
      n: 4,
      values: "",
      weights: "",
      errors: [],
      solve_knap: false,
      finalMaxWeight: 9,
      finalWt: [1,3,4],
      finalVal: [1,4,5]
    }
    this.maxWeightChange = this.maxWeightChange.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.solveKnapsack = this.solveKnapsack.bind(this);
  }

  maxWeightChange(e){
    this.setState({ maxweight: e.target.value });
  }

  valueChange(e){
    var newval = e.target.value;
    if( newval.slice(-1) == " " ){
       newval = newval.replace(/.$/,",");
       document.getElementById('values').value = newval;
    }
    this.setState({ values: newval });
  }

  weightChange(e){
    var newval = e.target.value;
    if( newval.slice(-1) == " " ){
       newval = newval.replace(/.$/,",");
       document.getElementById('weights').value = newval;
    }
    this.setState({ weights: newval });
  }

  solveKnapsack(e){
    var errors = [];

    // Check for blanks
    if( this.state.maxweight.length == 0 ){
      errors.push("Max weight can't be blank");
    }
    if( this.state.values.length == 0 ){
      errors.push("Values can't be blank ");
    }
    if( this.state.weights.length == 0 ){
      errors.push("Weights can't be blank");
    }
    if( !this.sameSizedArray( this.state.values.split(','),this.state.weights.split(',') ) ){
      errors.push("Values and Weights must be the same size");
    }
    this.setState({errors: errors});
    if( errors.length <= 0 )
    {
      // Continue
      console.log("VALUES CH");
      console.log( this.state.maxweight );
      console.log(  this.stringArrToInt(this.state.values.split(",")) );
      console.log( this.stringArrToInt(this.state.weights.split(",")) );

      // Parse the input to add into the Dynamic Table Component
      this.setState({ finalMaxWeight: parseInt(this.state.maxweight) });
      this.setState({ finalVal: this.stringArrToInt(this.state.values.split(",") ) });
      this.setState({ finalWt: this.stringArrToInt(this.state.weights.split(",")) });
    }
  }

  stringArrToInt(arr)
  {
    var newarr = new Array();
    for(var i = 0; i < arr.length; i++)
    {
      newarr.push( parseInt(arr[i]) );
    }
    return newarr;
  }

  sameSizedArray( arr1, arr2 ){
    if( arr1.length == arr2.length ){
      return true;
    }
    return false;
  }

  render() {
    var test = this.state.valueChange;
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            <h4> Knapsack  </h4>
            <hr/> <br/>

            {this.state.errors.length > 0 ? <Errors errors={this.state.errors}/> : null}

            <label> Max Weight </label>
            <input onChange={this.maxWeightChange}
                   type="number"
                   placeholder="10"
                   value={this.state.maxweight} />

            <label> All Values (Comma Seperated) </label>
            <input  onChange={this.valueChange}
                    placeholder={this.state.val}
                    defaultValue={this.state.val}
                    id="values" />

            <label> All Weights (Comma Seprated) </label>
            <input onChange={this.weightChange}
                   placeholder={this.state.wt}
                   defaultValue={this.state.wt}
                   id="weights" />

            <button className="btn" onClick={this.solveKnapsack}> Solve </button>

          </div>
          <div className="col s9">
            <Dynamictable
              maxweight={this.state.finalMaxWeight}
              wt={this.state.finalWt}
              val={this.state.finalVal}
              n={this.state.n} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
