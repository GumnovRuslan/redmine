import { writable } from 'svelte/store';

const defaultState = {
	status: '',
	taskId: null,
	timerInitValue: '',
	timerPauseValue: ''
};
const TIMER_KEY = 'timer';
const timer = writable(defaultState);
const isBrowser = typeof window !== 'undefined';
const timerLocalStorage = isBrowser ? JSON.parse(localStorage.getItem(TIMER_KEY)) : defaultState;

if (timerLocalStorage) {
	timer.set(timerLocalStorage);
}

const saveToLocal = () => {
	let valueStore = null;
	timer.subscribe((value) => (valueStore = value));
	console.log(valueStore);
	if (valueStore.taskId != defaultState.taskId) {
		console.log('1');
		valueStore && localStorage.setItem('timer', JSON.stringify(valueStore));
	} else {
		console.log('2');
		localStorage.removeItem('timer');
	}
};

if (isBrowser) {
	document.addEventListener('visibilitychange', function () {
		if (document.visibilityState === 'hidden') {
			saveToLocal();
		}

		// if (document.visibilityState === 'visible') {
		// 	if (JSON.parse === 'init') {
		// 		// time = getTimer().time;
		// 	}
		// }
	});
}

timer.start = (taskId) => {
	var currentTime = new Date().getTime();
	var timerValue = null;
	timer.subscribe((value) => (timerValue = value));

	if (timerValue.status === 'pause') {
		timer.set({
			...timerValue,
			status: 'init',
			timerPauseValue: ''
		});
	} else {
		timer.set({
			status: 'init',
			taskId,
			timerInitValue: currentTime,
			timerPauseValue: ''
		});
	}

	saveToLocal();
};

timer.pause = () => {
	var currentTime = new Date().getTime();
	var timerValue = null;
	timer.subscribe((value) => (timerValue = value));
	timer.set({
		...timerValue,
		status: 'pause',
		timerPauseValue: currentTime
	});
	saveToLocal();
};

timer.clear = () => {
	timer.set(defaultState);
	saveToLocal();
};

timer.getTime = () => {
	let currentTime = new Date().getTime();
	let timerValue = null;
	timer.subscribe((value) => (timerValue = value));

	let elapsedPausedTime = 0;

	if (timerValue.timerPauseValue) {
		elapsedPausedTime = currentTime - timerValue.timerPauseValue;
	}

	const totalElapsedTime = currentTime - timerValue.timerInitValue - elapsedPausedTime;

	return totalElapsedTime;
};

export default timer;
