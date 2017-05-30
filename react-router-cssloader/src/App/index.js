import React from 'react';
import {MemoryRouter, Route, Link, Redirect} from 'react-router-dom';

import Game from '../Game';
import HighscorePage from '../HighscorePage';
import HighscoreStorage from '../Highscore/storage';
import s from './style.css';

export default class App extends React.Component {
	highscore = new HighscoreStorage();

	componentWillMount(){
		this.highscore.load();
	}

	render(){
		return (
			<MemoryRouter>
				<div className={s.root}>
					<Redirect exact path="/" to="/highscore" />
					<Route exact path="/game" render={(props) => <Game onGameEnd={(score) => this.onGameEnd(score, props.history)} />} />
					<Route exact path="/highscore" render={() => <HighscorePage highscore={this.highscore.highscore} />} />
				</div>
			</MemoryRouter>
		);
	}

	onGameEnd(score, history){
		let name = prompt('Your score is ' + score + '\nPlease enter your name');

		if(name){
			this.highscore.add(name, score);
			this.highscore.cap(10);
			this.highscore.save();
		}

		history.replace('/highscore');
	}
}
