/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Flag from './flag/flag';
import Answers from './answers/answers';
import Score from './score/score';
import _ from 'lodash';
import toastr from 'toastr';
import flagCodes from '../../assets/flagCodes.json'
import flagsApi from '../api/flagsApi';
toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-top-right",
	"preventDuplicates": true,
	"onclick": null,
	"showDuration": "100",
	"hideDuration": "300",
	"timeOut": "1000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};
var DoneFrame = React.createClass({
	render: function() {
		return (
			<div className="well text-center">
				<h2>Game Over :(</h2>
				<h3>Your Score: {this.props.score}</h3>
				<button className="btn btn-default"
				        onClick={this.props.resetGame}>
					Play again
				</button>
			</div>
		);
	}
});

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState();
		this.flagsCopy = _.cloneDeep(this.state.flags);
	}

	getInitialState = function () {
		return {
			flags: [],
			score: 0,
			settings: {
				numOfAnswers: 4,
				limit: 3,
				isGameOver: false
			}
		};
	}.bind(this);

	componentDidMount = function () {
		if (this.isMounted()) {
			this.setState({flags: flagsApi.getAllFlags()});
		}
	};

	handleCorrectAnswer = function () {

		toastr["success"]("msg", "That's Correct!");

		setTimeout( ()=>{
			this.setState({flags: this.state.flags, score: this.state.score + 1})
		}, 700)

	}.bind(this);

	handleIncorrectAnswer = function () {

		toastr["error"]("You are so, so wrong.", "Ooops :(");

		let handledSettings = _.cloneDeep(this.state.settings);
		handledSettings.limit -= 1;

		handledSettings.limit < 1 && (handledSettings.isGameOver = true);

		setTimeout(()=> {
			this.setState({flags: this.state.flags, settings: handledSettings});
		}, 700);
	}.bind(this);

	resetGame = function () {
			this.setState(this.getInitialState());
	}.bind(this);

	render() {
		let gameFrame;
		const currentFlag = this.state.flags.splice(Math.floor(Math.random() * (this.state.flags.length - 1)), 1)[0];
		if (this.state.settings.isGameOver) {
			gameFrame = <DoneFrame isGameOver={this.state.settings.isGameOver} score={this.state.score} resetGame={this.resetGame}/>
		} else {

			let answers = [];
			for (let i = 0; i < this.state.settings.numOfAnswers - 1; i++) {
				let random = Math.floor(Math.random() * (this.state.flags.length - 1));
				_.find(answers, (o) => o.id === random) ? answers.push(this.state.flags[random+1]) : answers.push(this.state.flags[random+1]);
			}

			answers.push(currentFlag);
			answers = _.shuffle(answers);
			console.log(answers);

			gameFrame = <div className="row">
				<Answers options={answers} correctAnswer={currentFlag.id}
				         onCorrectAnswer={this.handleCorrectAnswer}
				         onIncorrectAnswer={this.handleIncorrectAnswer} retries={this.state.settings.limit}/>
			</div>;
		}
		return (
			<div className="Game container">
				<div className="row">
					id: {currentFlag.id}
					<Score score={this.state.score} flagLength={this.state.flags.length} retries={this.state.settings.limit}/>
				</div>
				<div className="row">
					<Flag link={currentFlag.alphaTwo.toLowerCase()}/>
				</div>
				{gameFrame}
			</div>
		);
	}
}

export default Game;
