<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import Modal from './Modal.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import formatDate from '$lib/helpers/formatDate';
	import { getTimeEntries } from '$lib/services/apiService';

	export let issueId;
	export let titleHeading = '';
	export let handlerClose = () => {};

	const { id, localApiKey } = $userData;

	$: issueTimeEntries = null;
	$: issueTimeEntriesCount = 0;

	const itemsPerPage = 5;
	let currentPage = 1;
	let prevcurrentPage = null;
	let paginacationOffset = currentPage * itemsPerPage - itemsPerPage;

	onMount(() => {
		updateTimeEntries();
		prevcurrentPage = currentPage;
	});

	$: {
		if (!!prevcurrentPage && currentPage != prevcurrentPage) {
			updateTimeEntries();
			prevcurrentPage = currentPage;
		}
	}

	const updateTimeEntries = async () => {
		paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
		const response = await getTimeEntries(
			localApiKey,
			issueId,
			id,
			paginacationOffset,
			itemsPerPage
		);

		issueTimeEntries = response.time_entries;
		issueTimeEntriesCount = Math.ceil(response.total_count / itemsPerPage);
	};
</script>

<Modal handleCloseModal={handlerClose} title={`${titleHeading} : `}>
	<div class="time-entries">
		{#if !!issueTimeEntries && !!issueTimeEntries?.length}
			{#each issueTimeEntries as timeEntry}
				<div class="time-entries__item">
					<div class="time-entries__item-heading">
						<div class="time-entries__item-time">
							<div class="time-entries__item-time-icon" />
							<div class="time-entries__item-time-value">{timeEntry.hours} h</div>
						</div>
						<div class="time-entries__item-date">{formatDate(timeEntry.created_on)}</div>
					</div>
					{#if timeEntry.comments}
						<div class="time-entries__item-text">{timeEntry.comments}</div>
					{/if}
				</div>
			{/each}
		{/if}
		{#if !!issueTimeEntries && !issueTimeEntries?.length}
			Empty time entries
		{/if}
	</div>
	<svelte:fragment slot="controls">
		{#if !!issueTimeEntriesCount && issueTimeEntriesCount > 1}
			<Pagination bind:currentPage totalPages={issueTimeEntriesCount} {itemsPerPage} />
		{/if}
	</svelte:fragment>
</Modal>

<style lang="scss">
	.time-entries {
		display: flex;
		flex-direction: column;
		gap: 20px;

		&__item {
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 12px;
			width: 500px;
		}

		&__item-heading {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 15px;
		}

		&__item-text {
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
			color: #7f818b;
			width: 100%;
			border-top: 1px solid #d6d6d6;
			padding: 15px;
		}

		&__item-time {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&__item-date {
			font-weight: 500;
			font-size: 14px;
			line-height: 14px;
			color: #7f818b;
		}

		&__item-time-value {
			font-weight: 700;
			font-size: 16px;
			line-height: 16px;
			color: #000000;
		}

		&__item-time-icon {
			background-image: url('/icons/clock.svg');
			width: 25px;
			height: 26px;
			background-repeat: no-repeat;
			background-size: 100%;
		}
	}
</style>
