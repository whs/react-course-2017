import React from 'react';
import {Link} from 'react-router-dom';

import Highscore from '../Highscore';
import s from './style.css';

export default (props) => {
	return (
		<div className={s.highscore}>
			<h1>Highscore</h1>
			<div className={s.highscoreIn}>
				<Highscore highscore={props.highscore} />
				<Link className={s.playagain} to="/game">Play again</Link>
			</div>
		</div>
	);
};
