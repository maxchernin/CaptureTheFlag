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
    let icon = this.props.icon  ? this.props.icon : 'glyphicon-home';
    let space = ' ';
    return (
        <div className="NavBtn">
          <Link to={this.props.linkPath}>
            <button className="btn btn-warning">
              <span className={'glyphicon' + space + icon}></span> {this.props.text}
              </button>
          </Link>
          </div>
      );
  }
}



export default NavBtn;
