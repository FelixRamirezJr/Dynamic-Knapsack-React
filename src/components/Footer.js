import React, { Component } from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
    // Set the number of rows for each of the following
  }
  render() {

    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ul>
                <li> Visit my home page </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
