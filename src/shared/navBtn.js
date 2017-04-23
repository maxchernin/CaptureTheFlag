/**
 * Created by maxcher on 22/04/2017.
 */
import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NavBtn extends Component {

  constructor(props) {
    super();
  }
  render() {
    let icon = this.props.icon  ? this.props.icon : '';
    let btnClass = this.props.class ? this.props.class : '';
    let space = ' ';
    let customClass = this.props.customClass ? this.props.customClass : 'NavBtn';
    return (
        <div className={customClass}>
          <Link to={this.props.linkPath}>
            <button className={'btn' + space + btnClass}>
              <span className={'glyphicon' + space + icon}></span> {this.props.text}
              </button>
          </Link>
          </div>
      );
  }
}



export default NavBtn;
