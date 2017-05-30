import React from 'react';

import Score from '../Score';
import Timer from '../Timer';
import rs from '../App/style.css';
import s from './style.css';

let MAX_TIME = 5000;

export default class Game extends React.Component {
	state = {
		gameStarted: false,
		clicks: 0,
	}

	render(){
		let message = 'Click ตรงไหนก็ได้เพื่อเริ่มเกม';

		if(this.state.gameStarted){
			message = <Score score={this.state.clicks} />;
		}

		return (
			<div onClick={this.onClick.bind(this)} className={rs.root}>
				<h1>Clickr</h1>
				<div className={s.text}>
					{message}
				</div>
				{this.state.gameStarted && <Timer maxTime={MAX_TIME} start={this.timeStart} />}
			</div>
		);
	}

	onClick(){
		this.startGame();
		this.increaseClicks();
	}

	startGame(){
		if(this.state.gameStarted){
			return;
		}

		this.setState({
			gameStarted: true,
			clicks: 0,
		});
		this.timeStart = new Date().getTime();

		setTimeout(() => {
			this.props.onGameEnd(this.state.clicks);
		}, MAX_TIME);
	}

	increaseClicks(){
		if(this.getTimeLeft() < 0){
			return;
		}

		this.setState((state) => {
			return {clicks: state.clicks + 1};
		});
	}

	getTimeLeft(){
		return (MAX_TIME + this.timeStart) - new Date().getTime();
	}
}
