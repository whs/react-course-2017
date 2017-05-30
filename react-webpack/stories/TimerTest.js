import React from 'react';

import Timer from '../src/Timer';

export default class TimerTest extends React.Component {
	state = {
		start: 0,
	}

	render(){
		return (
			<div>
				<button onClick={this.reset.bind(this)}>Reset</button>
				<Timer maxTime={this.props.maxTime} start={this.state.start} />
			</div>
		);
	}

	reset(){
		this.setState({
			start: new Date().getTime(),
		});
	}
}
