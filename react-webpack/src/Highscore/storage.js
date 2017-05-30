export default class HighscoreStorage {
	highscore = [];

	load(){
		try{
			this.highscore = JSON.parse(localStorage.highscore);
		}catch(e){
			this.highscore = [];
		}
	}

	save(){
		localStorage.highscore = JSON.stringify(this.highscore);
	}

	add(name, score){
		this.highscore.push({
			name: name,
			score: score,
		});

		this.highscore = this.highscore.sort(function(a, b){
			return b.score - a.score;
		});
	}

	cap(limit){
		this.highscore.splice(limit, this.highscore.length);
	}
}
