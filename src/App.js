import React, { Component } from 'react';
import Game from './game/game';
import Navbar from './navbar/navbar';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/toastr/build/toastr.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Insert logo here</h2>
        </div>

          <Game/>

      </div>
    );
  }
}

export default App;
