let message = document.getElementById('message');
let timer = document.getElementById('timer');
let clicks = 0;
let timeStart = 0;
let interval;
let maxTime = 5000;

function update(){
	message.textContent = clicks;
	let size = (clicks/2) + 12;
	message.style.fontSize = size + 'pt';
}

function formatTime(time){
	return Math.ceil(time / 100)/10;
}

function updateTime(){
	timer.textContent = 'เหลือเวลาอีก ' + formatTime((maxTime + timeStart) - new Date().getTime()) + ' วินาที';

	if(new Date().getTime() > maxTime + timeStart){
		clearInterval(interval);
		return;
	}
}

function startTimer(){
	if(interval){
		return;
	}

	interval = setInterval(updateTime, 100);
	updateTime();
}

window.addEventListener('click', function(e){
	if(!timeStart){
		timeStart = new Date().getTime();
	}
	if(new Date().getTime() > maxTime + timeStart){
		return;
	}
	clicks++;
	update();
	startTimer();
});
