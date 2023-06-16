<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Pagination from '$lib/components/Pagination.svelte';
	import userData from '$lib/stores/UserStore';
	import { getTimeEntries } from '$lib/services/apiService';
	import Icon from '$lib/components/Icon.svelte';
	import Button from './Button.svelte';

	export let issue = {};
	export let handler = () => {};
	export let showDetails = () => {};

	const { localApiKey, id } = $userData;
	$: issueTimeEntries = [];
	$: issueTimeEntriesCount = 0;
	let prevIssue = {};

	$: {
		if (issue !== prevIssue && prevIssue != {}) {
			updateTimeEntries();
			prevIssue = issue;
		}

		if (!!prevcurrentPage && currentPage != prevcurrentPage) {
			updateTimeEntries();
			prevcurrentPage = currentPage;
		}
	}

	onMount(() => {
		updateTimeEntries();
		prevIssue = issue;
		prevcurrentPage = currentPage;
	});

	const itemsPerPage = 5;
	let currentPage = 1;
	let prevcurrentPage = null;
	let paginacationOffset = currentPage * itemsPerPage - itemsPerPage;

	let showDescription = false;
	let showTimeEntries = false;

	const toggleDescription = () => (showDescription = !showDescription);
	const toggleTimeEntries = () => (showTimeEntries = !showTimeEntries);
	const updateTimeEntries = async () => {
		paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
		const response = await getTimeEntries(
			localApiKey,
			issue.id,
			id,
			paginacationOffset,
			itemsPerPage
		);

		issueTimeEntries = response.time_entries;
		issueTimeEntriesCount = Math.ceil(response.total_count / itemsPerPage);
	};

	const formatDate = (utcTime) => {
		const date = new Date(utcTime);
		const offset = date.getTimezoneOffset() * 60 * 1000;
		const localTime = new Date(date.getTime() - offset);
		return localTime.toLocaleString('ru-RU', { timeZone: 'UTC' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="ticketItem">
	<div class="ticketItem__wrapper">
		<div class="ticketItem__heading">
			<p on:click={handler} class="ticketItem__heading-text">{issue.subject}</p>
			<div class="ticketItem__heading-time">
				<p class="ticketItem__heading-text">8:42</p>
				<Icon width="30px" height="30px" name="chevron-down" />
			</div>
		</div>
		<Button handle={showDetails}  label="Show more" />
	</div>
</div>

{#if showDescription}
	<div class="description" transition:slide={{ duration: 500 }}>
		<span>{issue.description}</span>
	</div>
{/if}
{#if showTimeEntries}
	<div class="time-entries" transition:slide={{ duration: 500 }}>
		{#each issueTimeEntries as timeEntry}
			<div class="time-entries--item">
				<div>Id: {timeEntry.id}</div>
				<div>hours {timeEntry.hours}</div>
				<div>{timeEntry.comments || 'without comment'}</div>
				<div>{formatDate(timeEntry.created_on)}</div>
			</div>
		{/each}
		{#if !!issueTimeEntriesCount}
			<Pagination bind:currentPage totalPages={issueTimeEntriesCount} {itemsPerPage} />
		{/if}
	</div>
{/if}

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
