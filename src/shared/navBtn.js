/**
 * Created by maxcher on 22/04/2017.
 */
import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NavBtn extends Component {

  // constructor(props) {
  //   super();
  // }
  render() {
    return (
        <div className="NavBtn">
          <Link to={this.props.linkPath}>{this.props.text}</Link>
          </div>
      );
  }
}



export default NavBtn;
