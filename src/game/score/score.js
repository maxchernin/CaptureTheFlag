/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';

class Score extends Component {
	render() {
		return (
			<div className="Score col-md-4">
				Your Score Is: {this.props.score}
			</div>
		);
	}
}

export default Score;