/**
 * Created by Max on 3/29/2017.
 */
import React, {Component} from "react";
import Answer from "./answer/answer";

class Answers extends Component {
	constructor(props){
		super();
		this.state = {
			base: 10
		}
	}
	checkAnswer = function (selectedAnswer) {
		if (parseInt(selectedAnswer, this.state.base) === parseInt(this.props.correctAnswer, this.state.base)) {
			this.props.onCorrectAnswer();
			//push state up
		} else {
			this.props.onIncorrectAnswer();
		}

	}.bind(this);

	render() {
		console.log(this.props);
		const answers = this.props.options.map(function (answer, key) {
			return (<Answer key={answer.id} id={answer.id} city={answer.city} onButtonClick={this.checkAnswer}/>)
		}.bind(this));
		return (
			<div className="Answers">
				<div className="row">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="col-md-8 col-md-offset-2">
								{answers}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Answers;