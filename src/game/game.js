/**
 * Created by Max on 3/29/2017.
 */
import React, { Component } from 'react';
import Flag from './flag/flag';
import Answers from './answers/answers';
import Score from './score/score';

class Game extends Component {
	render() {
		return (
			<div className="Game">
			Main Game Component
				<Flag/>
				<Answers/>
				<Score/>
			</div>
		);
	}
}

export default Game;
