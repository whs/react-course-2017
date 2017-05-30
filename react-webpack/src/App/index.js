import React from 'react';

import Game from '../Game';
import Highscore from '../Highscore';
import HighscoreStorage from '../Highscore/storage';

export default class App extends React.Component {
	state = {
		mode: 'highscore',
	}

	highscore = new HighscoreStorage();

	componentWillMount(){
		this.highscore.load();
	}

	render(){
		let child = <Game onGameEnd={this.onGameEnd.bind(this)} />;

		if(this.state.mode === 'highscore'){
			child = (
				<div>
					<Highscore highscore={this.highscore.highscore} />
					<button className="playagain" onClick={this.playAgain.bind(this)}>Play again</button>
				</div>
			)
		}

		return (
			<div className="root">
				{child}
			</div>
		);
	}

	onGameEnd(score){
		let name = prompt('Your score is ' + score + '\nPlease enter your name');

		if(name){
			this.highscore.add(name, score);
			this.highscore.cap(10);
			this.highscore.save();
		}

		this.setState({mode: 'highscore'});
	}

	playAgain(){
		this.setState({mode: 'play'});
	}
}
