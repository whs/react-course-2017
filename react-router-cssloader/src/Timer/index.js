import React from 'react';

import s from './style.css';

export default class Timer extends React.Component {
	componentDidMount(){
		this.interval = setInterval(this.forceUpdate.bind(this), 100);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

	render(){
		return <div className={s.timer}>เหลือเวลาอีก {this.formatTime(this.getTimeLeft())} วินาที</div>;
	}

	getTimeLeft(){
		return (this.props.maxTime + this.props.start) - new Date().getTime();
	}

	formatTime(time){
		if(time < 0){
			time = 0;
		}
		let out = (Math.ceil(time / 100)/10).toString();

		if(!out.includes('.')){
			out += '.0';
		}

		return out;
	}
}
