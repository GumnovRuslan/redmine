<script>
	import TicketItem from './TicketItem.svelte';
	import priorityColor from '../helpers/priorityColor';

	export let issues;
	export let activeItemId;
	export let handler = () => {};
	export let toggleTicketDetails = () => {};
	export let toggleTicketTimeEntries = () => {};

	const showDetails = (issue) => {
		toggleTicketDetails(issue);
	};

	const showingTicketTimeEntries = (issue) => {
		toggleTicketTimeEntries(issue);
	};
</script>

{#if !!issues.length}
	<div class="ticketList">
		<div class="ticketList__wrapper">
			<p class="ticketList__title">Ticket</p>
			<div class="ticketList__items">
				{#each issues as { priority, ...issue }}
					<TicketItem
						handler={() => handler(issue)}
						showingTicketTimeEntries={() => showingTicketTimeEntries(issue)}
						showDetails={() => showDetails(issue)}
						status={priorityColor[priority.name.toLowerCase()]}
						{issue}
						activeItemId={activeItemId == issue.id ? true : false}
					/>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.ticketList {
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		&__title {
			font-weight: 800;
			font-size: 16px;
			line-height: 22px;
			color: #7f818b;
		}

		&__items {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
