export default (utcTime) => {
	const date = new Date(utcTime);
	const offset = date.getTimezoneOffset() * 60 * 1000;
	const localTime = new Date(date.getTime() - offset);
	return localTime.toLocaleString('ru-RU', { timeZone: 'UTC' });
};
