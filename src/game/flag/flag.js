/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';

class Flag extends Component {
	render() {
		const parsedLink = 'images/flags/png/' + this.props.link.toLowerCase() + '.png';
		return (
			<div className="Flag col-md-8">
				<div className="panel panel-default">
					<div className="panel-body">
						<img src={parsedLink} alt="Flag" height={"130px"} />
					</div>
				</div>
			</div>
		);
	}
}
export default Flag;