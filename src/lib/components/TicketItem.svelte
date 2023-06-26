<script>
	import Icon from '$lib/components/Icon.svelte';
	import Button from './Button.svelte';
	import TimerStore, { statusEnum } from '../stores/TimerStore';

	export let activeItemId = null;
	export let issue = {};
	export let handler = () => {};
	export let showDetails = () => {};
	export let showingTicketTimeEntries = () => {};

	$: colorDot = $TimerStore.status == statusEnum.INIT ? 'red' : 'blue';
	$: isPlayingAnimation = $TimerStore.status == statusEnum.INIT ? true : false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class:active={activeItemId}
	class:isPlayingAnimation
	style="--colorDot: {colorDot};"
	class="ticketItem"
>
	<div class="ticketItem__wrapper">
		<div class="ticketItem__heading">
			<p on:click={handler} class="ticketItem__heading-text">{issue.subject}</p>
			<div on:click={showingTicketTimeEntries} class="ticketItem__heading-time">
				<p class="ticketItem__heading-text">8:42</p>
				<Icon width="30px" height="30px" name="chevron-down" />
			</div>
		</div>
		<Button handle={showDetails} label="Show more" />
	</div>
</div>

<style lang="scss">
	.ticketItem {
		position: relative;
		background: #fefefd;
		border: 1px solid #d6d6d6;
		box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		padding: 25px;
		transition: 1s ease;

		&.active.isPlayingAnimation {
			&:after {
				animation: pulseAnimation 1s ease-in-out infinite;
			}
		}

		&.active {
			@keyframes pulseAnimation {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(1.2);
				}
				100% {
					transform: scale(1);
				}
			}

			&:after {
				content: '';
				position: absolute;
				top: -10px;
				right: -10px;
				width: 25px;
				height: 25px;
				background: var(--colorDot);
				border-radius: 50%;
				border: 3px solid #d8d8d8;
				box-shadow: 0 0 4px 1px #c1c1c1;
			}
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 15px;
			align-items: flex-start;
		}

		&__heading {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		&__heading-text {
			font-weight: 700;
			font-size: 20px;
			line-height: 27px;
			color: #000000;
			cursor: pointer;
		}

		&__heading-time {
			position: relative;
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				height: 100%;
				padding: 25px 60px;
			}
		}

		&__text {
			padding-top: 20px;
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
			color: #7f818b;
		}
	}
</style>
