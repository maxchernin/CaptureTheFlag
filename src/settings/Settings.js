import React, { Component } from 'react';
import NavBtn from '../shared/navBtn';

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        Settings
        <NavBtn linkPath="/" text="Back"/>
      </div>
    );
  }
}

export default Settings;
