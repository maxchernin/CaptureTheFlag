/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Answer from './answer/answer';

class Answers extends Component {
	constructor(props){
		super();
	}
	checkAnswer = function (selectedAnswer) {
		if(parseInt(selectedAnswer) === parseInt(this.props.correctAnswer)){
				alert('correct');
				this.props.onCorrectAnswer();
				//push state up
		} else {
			alert('wrong answer');
		}

	}.bind(this);
	render() {
		console.log(this.props);
		const answers = this.props.options.map(function (answer, key) {
			return (<Answer key={answer.id} id={answer.id} city={answer.city} onButtonClick={this.checkAnswer}/>)
		}.bind(this));
		return (
			<div className="Answers col-md-8">
				<div className="Flag row">
					<div className="panel panel-default">
						<div className="panel-body">
							{answers}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Answers;