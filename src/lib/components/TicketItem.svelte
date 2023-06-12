<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { user } from '$lib/stores/UserStore';
	import { getTimeEntries } from '$lib/services/apiService';
	import Icon from './Icon.svelte';

	export let issue = {};
	export let handler = () => {};
	let issueTimeEntries = [];

	let showDescription = false;
	let showTimeEntries = false;
	let trackingStarted = false;

	const toggleDescription = () => (showDescription = !showDescription);
	const toggleTimeEntries = () => (showTimeEntries = !showTimeEntries);
	const toggleTracking = () => (trackingStarted = !trackingStarted);

	onMount(async function () {
		const { localApiKey, id } = get(user);
		issueTimeEntries = await getTimeEntries(localApiKey, issue.id, id);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="issue" on:click={handler}>
	<span>{issue.id}</span>
	<div class="issue--content">
		<span class="issue--content-title">{issue.subject}</span>
		<span class="issue--content-subtitle">{issue.project.name}</span>
	</div>
	<span>{issue.status.name}</span>
	{#if !trackingStarted}
		<button on:click={toggleTracking}><Icon name="play" /></button>
	{:else}
		<button on:click={toggleTracking}><Icon name="stop" /></button>
	{/if}
	<button on:click={toggleDescription}><Icon name="chevron-down" /></button>
	<button on:click={toggleTimeEntries}><Icon name="chevron-down" /></button>
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
				<div>{timeEntry.comments}</div>
				<div>{new Date(timeEntry.created_on).toLocaleString('ru-RU', { timeZone: 'UTC' })}</div>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.issue {
		width: 100%;
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr 12fr 3fr 1fr 1fr 1fr;
		transition: 0.3s;
		background: rgb(133, 241, 113);

		&--content {
			display: flex;
			flex-direction: column;
			justify-content: center;

			&-title {
				font-size: 18px;
			}

			&-subtitle {
				font-size: 14px;
			}
		}

		&:hover {
			background: rgb(78, 167, 63);
		}

		& > span {
			font-size: 18px;
			padding: 15px 20px;
			display: flex;
			align-items: center;
		}
	}

	.time-entries {
		&--item {
			display: grid;
			grid-template-columns: 1.5fr 1.5fr 10fr 3fr;
			& div {
				padding: 10px 15px;
				display: flex;
				align-items: center;
			}
		}
	}
</style>
