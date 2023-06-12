<script>
	import { onDestroy } from 'svelte';

	let time = 0;
	let interval;
	let isStarted = false;

	function start() {
		interval = setInterval(() => {
			time += 10;
		}, 10);
		isStarted = true;
	}

	function stop() {
		clearInterval(interval);
		isStarted = false;
	}

	function reset() {
		time = 0;
		isStarted = false;
		stop();
	}

	function formatTime(ms) {
		const hours = Math.floor(ms / 3600000);
		ms %= 3600000;
		const minutes = Math.floor(ms / 60000);
		ms %= 60000;
		const seconds = Math.floor(ms / 1000);

		return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
	}

	function addZero(num) {
		return num < 10 ? '0' + num : num;
	}

	$: formattedTime = formatTime(time);

	onDestroy(() => {
		stop();
	});
</script>

<h1>{formattedTime}</h1>

<button on:click={start} disabled={isStarted}>Start</button>
<button on:click={stop} disabled={!isStarted}>Stop</button>
<button on:click={reset} disabled={!isStarted}>Reset</button>

<style>
	button {
		background-color: palegreen;
		margin-right: 10px;
		padding: 8px 16px;
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		border: none;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
