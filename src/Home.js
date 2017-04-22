/**
 * Created by maxcher on 22/04/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <Link to="/game">Start new game</Link>
          <Link to="/settings">Settings</Link>
        </div>
    );
  }
}



export default Home;
