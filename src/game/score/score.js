/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';

class Score extends Component {
	render() {
		return (
			<div className="Score">
				<div className="row">
					<div className="col-md-4"><span className="label label-info">Flags Remaining: {this.props.flagLength}</span></div>
					<div className="col-md-4"> <span className="label label-success">Your Score Is: {this.props.score}</span></div>
					<div className="col-md-4"> <span className="label label-warning">Attetmpts Remaining: {this.props.retries}</span></div>
				</div>
			</div>
		);
	}
}

export default Score;