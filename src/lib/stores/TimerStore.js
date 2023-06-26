import { writable } from 'svelte/store';

export const statusEnum = {
	INIT: 'init',
	PAUSE: 'pause',
	DEFAULT: ''
};

const defaultState = {
	status: statusEnum.DEFAULT,
	taskId: null,
	time: '',
	pauseValue: ''
};
const TIMER_KEY = 'timer';
const timer = writable(defaultState);
const isBrowser = typeof window !== 'undefined';
const timerLocalStorage = isBrowser ? JSON.parse(localStorage.getItem(TIMER_KEY)) : defaultState;

if (timerLocalStorage) {
	timer.set(timerLocalStorage);
}

timer.saveToLocal = () => {
	let valueStore = null;
	timer.subscribe((value) => (valueStore = value));

	if (valueStore.taskId != defaultState.taskId && valueStore.time > 0) {
		if (valueStore.status === statusEnum.INIT) {
			valueStore.pauseValue = new Date().getTime();
		}
		localStorage.setItem('timer', JSON.stringify(valueStore));
	} else {
		localStorage.removeItem('timer');
	}
};

timer.start = (taskId, timeValue) => {
	var timerValue = null;
	timer.subscribe((value) => (timerValue = value));

	timer.set({
		status: statusEnum.INIT,
		taskId,
		time: timeValue
	});

	timer.saveToLocal();
};

timer.pause = (timeValue) => {
	var timerValue = null;
	timer.subscribe((value) => (timerValue = value));
	timer.set({
		...timerValue,
		status: statusEnum.PAUSE,
		time: timeValue
	});
	timer.saveToLocal();
};

timer.clear = () => {
	timer.set(defaultState);
	timer.saveToLocal();
};

timer.getTime = () => {
	var currentTime = new Date().getTime();
	let timerValue = null;
	timer.subscribe((value) => (timerValue = value));

	if (timerValue.status === statusEnum.INIT && !!timerValue.pauseValue) {
		timerValue.time += currentTime - timerValue.pauseValue;
		timerValue.pauseValue = '';
	}

	return timerValue.time;
};

export default timer;
