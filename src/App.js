import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import routes from './App.Routes';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Insert logo here</h2>
        </div>
        <div className="well well-lg">...</div>
        {routes}
      </div>
      </Router>
    );
  }
}



export default App;
