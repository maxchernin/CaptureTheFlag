/**
 * Created by maxcher on 22/04/2017.
 */
import React, { Component } from 'react';
import Navigation from './shared/navigation';

class Home extends Component {

  render() {
	  console.log(this.props.location)
    return (
        <Navigation/>
        // <Footer/>
    );
  }
}



export default Home;
