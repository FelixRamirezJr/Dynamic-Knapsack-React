import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dynamictable from './components/Dynamictable';
import Errors from './components/Errors';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxweight: 10,
      wt: [10,20,30,40],
      val: [100,115,137,180],
      n: 4,
      maxweight: "",
      values: "",
      weights: "",
      errors: [],
      solve_knap: false
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
    this.setState({errors: errors});
    if( errors.length <= 0 )
    {
      // Continue
      console.log("VALUES CH");
      this.setState({ wt: [1,2,3,4] });
      this.setState({val: [1,2,3,4]  })
    }
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
              maxweight={this.state.maxweight}
              wt={this.state.wt}
              val={this.state.val}
              n={this.state.n} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
