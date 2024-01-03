function updateClock(){

	let now = new Date();
	let hours = now.getHours();
	let minuts = now.getMinutes();
	let seconds = now.getSeconds();

	hours = hours < 10 ? '0' + hours : hours;
	minuts = minuts < 10 ? '0' + minuts : minuts;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	const hoursElement = document.querySelector('#hours');
	const minutsElement = document.querySelector('#minutes');
	const secondsElement = document.querySelector('#seconds');

	hoursElement.textContent = hours;
	minutsElement.textContent = minuts;
	secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000)