import React from 'react';

import s from './style.css';

export default class Highscore extends React.Component {
	render(){
		let highscore = [];

		for(let i = 0; i < this.props.highscore.length; i++){
			highscore.push((
				<tr key={i}>
					<td>#{i+1}</td>
					<td>{this.props.highscore[i].name}</td>
					<td>{this.props.highscore[i].score}</td>
				</tr>
			));
		}

		if(this.props.highscore.length === 0){
			highscore = (
				<tr><td colSpan="3" style={{textAlign: 'center'}}>ยังไม่มีคนเล่นเลย</td></tr>
			);
		}

		return (
			<table className={s.highscore}>
				<thead>
					<tr>
						<td>Rank</td>
						<td>Name</td>
						<td>Score</td>
					</tr>
				</thead>
				<tbody>
					{highscore}
				</tbody>
			</table>
		);
	}
}
