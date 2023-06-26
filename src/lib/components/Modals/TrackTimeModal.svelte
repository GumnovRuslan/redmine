<script>
	import { onMount } from 'svelte';
	import Input from '../Input.svelte';
	import Dropdown from '../Dropdown.svelte';
	import Button from '../Button.svelte';
	import userData from '$lib/stores/UserStore';
	import { getEntryActivities, setTimeEntries } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	import TimerStore from '../../stores/TimerStore';

	export let timeSpent;
	export let activeIssue;
	export let titleHeading = '';
	export let handler = () => {};
	export let handlerClose = () => {};

	const { localApiKey } = $userData;

	let activities = [];
	let activeActivity = null;
	let comment = '';
	let dateSpent;

	onMount(async function () {
		activities = await getEntryActivities(localApiKey);
		activeActivity = activities[0]?.id;
	});

	async function handleClickCreate() {
		const timeEntry = {
			issue_id: activeIssue.id,
			spent_on: dateSpent,
			hours: timeSpent > 0.01 ? timeSpent : 0.01,
			activity_id: activeActivity,
			comments: comment
		};

		const response = await setTimeEntries(localApiKey, timeEntry);
		if (response.status) {
			handlerClose();
			handler(response.responseMessage);
			TimerStore.clear();
		}
	}
</script>

{#if !!activities.length}
	<Modal
		handleCloseModal={() => handlerClose()}
		title={`Save spent time on ticket : ${titleHeading}`}
	>
		<Input bind:value={dateSpent} type="date" placeholder="Date spent: " />
		<Input bind:value={timeSpent} placeholder="Time spent: (Hours) " />
		<Input bind:value={comment} placeholder="Comment: " />
		<Dropdown bind:value={activeActivity} items={activities} placeholder="Activity: " />

		<svelte:fragment slot="controls">
			<Button handle={handleClickCreate} label="Create" />
			<Button handle={() => handlerClose()} label="Cancel" />
		</svelte:fragment>
	</Modal>
{/if}
