import React, { Component } from 'react';

class Errors extends Component {
  constructor(props){
    super(props);
    this.state = {errors: []}
    // Set the number of rows for each of the following
  }
  render() {
    var errors = [];
    for(var i = 0; i < this.props.errors.length; i++)
    {
      errors.push(<li> {this.props.errors[i]} </li>);
    }

    // Styles
    const divError = {
      backgroundColor: '#ef5350',
      padding: 10,
      marginBottom: 10,
      color: '#fafafa'
    }

    return (
      <div style={divError} className="errors z-depth-4">
        <ul>
        { errors }
        </ul>
      </div>
    );
  }

}

export default Errors;
