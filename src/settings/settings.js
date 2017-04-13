/**
 * Created by Max on 4/7/2017.
 */

import React, { Component} from 'react';

class Settings extends Component {

	// constructor(props){
	// 	super(props);
	// }
	onButtonClick = function() {
		this.props.onButtonClick(this.props.id);
	}.bind(this);

	render() {
		return (
			<div className='Settings col-md-6'>
				settings
			</div>
		);
	}
}

export default Settings;