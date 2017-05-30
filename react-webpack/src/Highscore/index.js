import React from 'react';

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

		return (
			<div className="highscore">
				<h1>Highscore</h1>
				<table>
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
			</div>
		);
	}
}
