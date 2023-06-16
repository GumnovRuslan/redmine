export default (ms) => {
	const addZero = (num) => {
		return num < 10 ? '0' + num : num;
	};

	const hours = Math.floor(ms / 3600000);
	ms %= 3600000;
	const minutes = Math.floor(ms / 60000);
	ms %= 60000;
	const seconds = Math.floor(ms / 1000);

	return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};
