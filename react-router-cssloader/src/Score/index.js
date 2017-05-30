import React from 'react';

export default class Score extends React.Component {
	render(){
		let style = {
			fontSize: (this.props.score/2) + 12,
		};

		return (
			<div style={style}>{this.props.score}</div>
		)
	}
}
