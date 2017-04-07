/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';

class Flag extends Component {
	render() {
		const parsedLink = 'images/flags/png/' + this.props.link.toLowerCase() + '.png';
		return (
			<div className="Flag">
				<div className="panel panel-default">
					<div className="panel-body">
						<div className="jumbotron">
						<img src={parsedLink} alt="Flag" height={"200px"} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Flag;