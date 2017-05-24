import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dynamictable from './components/Dynamictable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxweight: 10,
      wt: [10,20,30,40],
      val: [100,115,137,180],
      n: 4
    }
  }
  render() {
    return (
      <div className="App">
        <Dynamictable
          maxweight={this.state.maxweight}
          wt={this.state.wt}
          val={this.state.val}
          n={this.state.n} />
      </div>
    );
  }

}

export default App;
