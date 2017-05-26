import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dynamictable from './components/Dynamictable';
import Errors from './components/Errors';
import Algorithm from './components/Algorithm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxweight: "",
      wt: "",
      val: "",
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
    var colStyles = {
      marginTop: 20,
      padding: 30,
      backgroundColor: '#0d47a1',
      color: 'white',
      borderRadius: 5
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 z-depth-5" style={colStyles}>
            <h4 className="center"> Knapsack  </h4>
            <p className="center"> Dynamic Programming solution to the Knapsack problem.  </p>
            <hr/> <br/>

            {this.state.errors.length > 0 ? <Errors errors={this.state.errors}/> : null}

            <div className="col s4">
              <label> Max Weight </label>
              <input onChange={this.maxWeightChange}
                     type="number"
                     placeholder={this.state.finalMaxWeight} />
            </div>

            <div className="col s4">
              <label> All Values (Comma Seperated) </label>
              <input  onChange={this.valueChange}
                      placeholder={this.state.finalVal}
                      id="values" />
            </div>

            <div className="col s4">
              <label> All Weights (Comma Seprated) </label>
              <input onChange={this.weightChange}
                     placeholder={this.state.finalWt}
                     id="weights" />
            </div>
            <div className="col s12">
              <button className="btn" onClick={this.solveKnapsack}> Solve </button>
            </div>

          </div>
          <div className="col s12 z-depth-5" style={colStyles}>
            <Dynamictable
              maxweight={this.state.finalMaxWeight}
              wt={this.state.finalWt}
              val={this.state.finalVal}
              n={this.state.n} />
          </div>

          <div className="col s12 z-depth-5" style={colStyles} >
            <p> Below you can see the solution to the knapsack problem in Java. Keep in mind, this is the dynamic solution so we are not using recursion but rather using the data that is already stored in the array as our comparison data. </p>
            <Algorithm/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
