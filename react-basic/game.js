let MAX_TIME = 5000;

class Game extends React.Component {
	state = {
		gameStarted: false,
		clicks: 0,
		timeStart: 0,
	}

	render(){
		let message = 'Click ตรงไหนก็ได้เพื่อเริ่มเกม';
		let messageStyle = {};
		let timer;

		if(this.state.gameStarted){
			message = this.state.clicks;
			timer = 'เหลือเวลาอีก ' + this.formatTime(this.getTimeLeft()) + ' วินาที';

			messageStyle.fontSize = (this.state.clicks/2) + 12;
		}

		return (
			<div onClick={this.onClick.bind(this)} className="root">
				<h1>Clickr</h1>
				<div className="text">
					<div className="text-inner" id="message" style={messageStyle}>{message}</div>
				</div>
				<div id="timer">{timer}</div>
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
			timeStart: new Date().getTime(),
		});

		this.interval = setInterval(this.updateTimer.bind(this), 100);
	}

	updateTimer(){
		this.forceUpdate();

		if(this.getTimeLeft() < 0){
			clearInterval(this.interval);
		}
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
		return (MAX_TIME + this.state.timeStart) - new Date().getTime();
	}

	formatTime(time){
		if(time < 0){
			time = 0;
		}
		return Math.ceil(time / 100)/10;
	}
}

ReactDOM.render(<Game />, document.getElementById('app'));
