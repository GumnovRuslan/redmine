<script>
	import { onMount } from 'svelte';
	import formatTime from '../helpers/formatTime';
	import TimerStore from '../stores/TimerStore';

	export let handle = () => {};
	export let time;
	export let activeIssueName;
	export let activeIssueId;

	let interval = null;
	let isButtonPlayActive = false;
	let buttonConditionStatus = '';

	$: formattedTime = formatTime(time);

	$: {
		if (time === null) {
			stopTimer();
			buttonConditionStatus = '';
			isButtonPlayActive = false;
		}
	}

	onMount(() => {
		if (!!time) {
			console.log('STATUS = > ', $TimerStore.status);
			if ($TimerStore.status === 'init') {
				toggleStatusTimer();
			}

			if ($TimerStore.status === 'pause') {
				isButtonPlayActive = false;
				buttonConditionStatus = '';
			}
		}
	});

	const startTimer = () => {
		if ($TimerStore.status !== 'init') {
			TimerStore.start(activeIssueId);
		}

		interval = setInterval(() => {
			time += 10;
		}, 10);
	};

	const stopTimer = () => {
		if (!!interval) {
			TimerStore.pause();
			clearInterval(interval);
			interval = null;
		}
	};

	const turnOffTimer = () => {
		stopTimer();
		handle();
		TimerStore.clear();
	};

	const toggleStatusTimer = () => {
		isButtonPlayActive = !isButtonPlayActive;

		if (isButtonPlayActive) {
			buttonConditionStatus = 'pause';
		} else if (!isButtonPlayActive && !!time) {
			buttonConditionStatus = '';
		}

		isButtonPlayActive ? startTimer() : stopTimer();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="timer">
	<div class="timer__wrapper">
		<div class="timer__task-title">{activeIssueName}</div>
		<div class="timer__controls">
			<p class="timer__time-value">{formattedTime}</p>
			<div class="timer__btns">
				<div on:click={toggleStatusTimer} class="timer__btn {buttonConditionStatus}">
					<span />
				</div>
				{#if !!time && !interval && buttonConditionStatus != 'pause'}
					<div on:click={turnOffTimer} class="timer__btn confirm"><span /></div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.timer {
		position: sticky;
		top: 20px;
		background: #fefefd;
		border: 1px solid #d6d6d6;
		box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		padding: 20px 15px;
		height: fit-content;
		margin-top: 55px;

		&__wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
		}

		&__task-title {
			position: relative;
			padding: 8px 18px;
			background: #f4f4f5;
			border-radius: 23px;
			font-weight: 700;
			font-size: 16px;
			line-height: 22px;
			color: #9095a1;
			width: 100%;
			word-break: break-word;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 15px;
				height: 15px;
				background: #ff6d6b;
				border: 2px solid #fefefd;
				border-radius: 50%;
			}
		}

		&__controls {
			display: flex;
			align-items: center;
			gap: 5px;
			width: 100%;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		&__btns {
			display: flex;
			align-items: center;
			gap: 20px;
		}

		&__time-value {
			font-weight: 700;
			font-size: 20px;
			line-height: 27px;
			width: 100px;

			&.active {
				color: #1e2026;
			}

			&:not(&.active) {
				color: #9095a1;
			}
		}

		&__btn {
			min-width: 40px;
			min-height: 40px;
			display: flex;
			border-radius: 50%;
			overflow: hidden;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: 0.3s ease-in-out;

			span {
				display: flex;
				width: 15px;
				height: 15px;
				border-radius: 2px;
			}

			&:not(&.confirm, &.pause) {
				background: #e8f7e5;

				span {
					margin-left: 1px;
					position: relative;
					background-repeat: no-repeat;
					background-position: right;
					background-image: url("data:image/svg+xml,%3Csvg width='13' height='16' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.66663 3.61552C1.66663 2.92595 1.66663 2.58116 1.81073 2.38868C1.93631 2.22093 2.12854 2.11599 2.33755 2.10106C2.57739 2.08393 2.86742 2.27037 3.44748 2.64327L10.2677 7.02771C10.7711 7.35129 11.0227 7.51308 11.1097 7.7188C11.1856 7.89855 11.1856 8.10138 11.1097 8.28114C11.0227 8.48686 10.7711 8.64865 10.2677 8.97223L3.44748 13.3567C2.86742 13.7296 2.57739 13.916 2.33755 13.8989C2.12854 13.8839 1.93631 13.779 1.81073 13.6113C1.66663 13.4188 1.66663 13.074 1.66663 12.3844V3.61552Z' fill='%237ED36D' stroke='%237ED36D' stroke-width='2.88957' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
				}
			}

			&:not(&.active, &.pause).confirm {
				background: #7ed36d;
				span {
					width: 25px;
					height: 25px;
					position: relative;
					background-repeat: no-repeat;
					background-position: center;
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:white;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M235.1,386.3c-5.7,0-11.1-2.4-14.9-6.6l-104.1-116c-7.4-8.2-6.7-20.9,1.5-28.2c8.2-7.4,20.9-6.7,28.2,1.5 l86.8,96.8l131.6-199.1c6.1-9.2,18.5-11.7,27.7-5.7c9.2,6.1,11.7,18.5,5.7,27.7L251.8,377.4c-3.4,5.2-9,8.5-15.2,8.9 C236.1,386.3,235.6,386.3,235.1,386.3z'/%3E%3C/g%3E%3C/svg%3E");
				}
			}

			&:not(&.active):not(&.confirm).pause {
				background: #e8f0fc;

				span {
					width: 4px;
					background: #428ded;
					box-shadow: 8px 0 0px 0 #428ded;
					margin-left: -7px;
				}
			}
		}
	}
</style>
