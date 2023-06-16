<script>
	import TicketItem from './TicketItem.svelte';
	export let issues;
	export let handler = () => {};
	export let toggleTicketDetails = () => {};

	const showDetails = (issue) => {
		toggleTicketDetails(issue);
	}
</script>


<div class="ticketList">
	<div class="ticketList__wrapper">
		<p class="ticketList__title">Ticket</p>
		<div class="ticketList__items">
			{#each issues as issue}
				<TicketItem handler={() => handler(issue)} showDetails={()=>showDetails(issue)} {issue} />
			{/each}
		</div>
	</div>
</div>


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