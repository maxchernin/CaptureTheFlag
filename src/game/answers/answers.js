/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Answer from './answer/answer';

class Answers extends Component {
	render() {
		return (
			<div className="Answers col-md-8">
				Answers Component
				<Answer/>
			</div>
		);
	}
}

export default Answers;