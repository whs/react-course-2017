var message = document.getElementById('message');
var timer = document.getElementById('timer');
var clicks = 0;
var timeStart = 0;
var interval;
var maxTime = 5000;

function update(){
	message.textContent = clicks;
	var size = (clicks/2) + 12;
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
