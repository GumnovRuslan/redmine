<script>
	import { onMount } from 'svelte';
	import Input from '../Input.svelte';
	import Dropdown from '../Dropdown.svelte';
	import Button from '../Button.svelte';
	import userData from '$lib/stores/UserStore';
	import { getEntryActivities, setTimeEntries, setStatusIssue } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	import TimerStore from '../../stores/TimerStore';
	import { popupStore } from '$lib/stores/popupStore.js'

	export let timeSpent;
	export let activeIssue;
	export let titleHeading = '';
	export let handler = () => {};
	export let handlerClose = () => {};

	const { localApiKey } = $userData;

	let billableActivity = 0
	let billableValue = [{
		name: 'No',
		id: 0,
		is_default: false,
	},
	{
		name: 'Yes',
		id: 1,
		is_default: true,
	}]
	let activities = [];
	let activeActivity = null;
	let comment = '';
	let dateSpent;
	$: errors = {};

	onMount(async function () {
		activities = await getEntryActivities(localApiKey).then(res => res.filter(obj => obj.active));
		activeActivity = activities[0]?.id;
	});

	async function handleClickCreate() {
		const timeEntry = {
			issue_id: activeIssue.id,
			spent_on: dateSpent,
			hours: timeSpent > 0.01 ? timeSpent : 0.01,
			activity_id: activeActivity,
			comments: comment,
			billable_id: billableActivity
		};

		if (!validateDate(dateSpent)) {
			errors.date = { message: 'Введите корректную дату' };
		} else {
			delete errors?.date;
			errors = errors;
		}

		if (!validateTimeSpent(timeSpent)) {
			errors.timeSpent = { message: 'Введите корректное затраченное время' };
		} else {
			delete errors?.timeSpent;
			errors = errors;
		}

		if (Object.keys(errors).length > 0) {
			return;
		}

		await setStatusIssue(localApiKey, activeIssue.id, activeIssue.status.id, activeIssue.assigned_to.id)
		const response = await setTimeEntries(localApiKey, timeEntry);
		if (response.status) {
			popupStore.set({
				isShow: true,
				title: 'Notification',
				text: response.responseMessage
			})
			handlerClose();
			handler(response.responseMessage);
			TimerStore.clear();
		}
	}

	const validateDate = (date) => {
		const dateRegex = /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])$/;
		return dateRegex.test(date);
	};

	const validateTimeSpent = (value) => {
		return value > 0;
	};
</script>

{#if !!activities.length}
	<Modal
		handleCloseModal={() => handlerClose()}
		title={`Save spent time on ticket : ${titleHeading}`}
	>
		<Dropdown bind:value={activeIssue.status.id} items={activeIssue.available_statuses} />
		{#if errors?.date}
			<p class="TrackTimeModal__error-message">{errors.date.message}</p>
		{/if}
		<Input bind:value={dateSpent} type="date" placeholder="Date spent: " />
		{#if errors?.timeSpent}
			<p class="TrackTimeModal__error-message">{errors.timeSpent.message}</p>
		{/if}
		<Input bind:value={timeSpent} type="number" placeholder="Time spent: (Hours) " />
		<Input bind:value={comment} isTextArea={true} placeholder="Comment: "  />
		<Dropdown bind:value={activeActivity} items={activities} placeholder="Activity: " />
		<Dropdown bind:value={billableActivity} items={billableValue} placeholder="Billable: " />

		<svelte:fragment slot="controls">
			<Button handle={handleClickCreate} label="Create" />
			<!-- <Button handle={() => handlerClose()} label="Cancel" /> -->
		</svelte:fragment>
	</Modal>
{/if}

<style>
	.TrackTimeModal__error-message {
		color: red;
		font-size: 12px;
		font-weight: 600;
	}
</style>
