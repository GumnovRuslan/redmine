<script>
	import Icon from '$lib/components/Icon.svelte';
	import Button from './Button.svelte';

	export let issue = {};
	export let handler = () => {};
	export let showDetails = () => {};
	export let showingTicketTimeEntries = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="ticketItem">
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
		background: #fefefd;
		border: 1px solid #d6d6d6;
		box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		padding: 25px;
		transition: 1s ease;

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
