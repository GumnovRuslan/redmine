<script>
	import { onMount } from 'svelte';
	import Input from '../Input.svelte';
	import Dropdown from '../Dropdown.svelte';
	import Button from '../Button.svelte';
	import userData from '$lib/stores/UserStore';
	import { getEntryActivities, setTimeEntries, setStatusIssue, getStatuses, getMemberships, getIssues } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	import TimerStore from '../../stores/TimerStore';
	import { popupStore } from '$lib/stores/popupStore.js'
	import {availableStatusesForRole} from '$lib/services/getAvailableStatuses'

	export let timeSpent;
	export let activeIssue;
	export let titleHeading = '';
	export let handler = () => {};
	export let handlerClose = () => {};

	let statuses = [
        {
            name: 'To do',
            id: 1,
        },
        {
            name: 'In Progress',
            id: 2,
        },
        {
            name: 'Closed',
            id: 5,
        },
        {
            name: 'QA',
            id: 4,
        },
        {
            name: 'Resolved',
            id: 3,
        },
        {
            name: 'Estimate',
            id: 8,
        },
	]

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
		getAvailableStatuses(localApiKey, activeIssue)
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

	async function getAvailableStatuses(ApiKey, issue) {
		let user_id = issue.assigned_to.id
		let project_id = issue.project.id
		let ticket_id = issue.id
		const statusesTrue = await getStatuses(ApiKey)
		const parents = await getIssues(ApiKey, false, false, false, ticket_id)
		const membership = await getMemberships(ApiKey, project_id)
		let parentsIsOpen = false
		if(parents.total_count)
			parentsIsOpen = !parents.issues.find(issue => issue.status.id == 5 || issue.status.id == 6)
		const userMembership = membership.find(membership => membership.user.id === user_id)
		const userRolesName = userMembership.roles.map(role => role.name)
		// const userRoleName = ['QA']
		let allStatuses = new Set()
		userRolesName.forEach(roleName => availableStatusesForRole[roleName][issue.status.id].forEach(n => allStatuses.add(n)))
		allStatuses = new Array(...allStatuses)
		if(parentsIsOpen)
			allStatuses = allStatuses.filter(status => status != 5 && status != 6)
		statuses = allStatuses.map(id => statusesTrue.find(status => status.id == id))
	}
</script>

{#if !!activities.length}
	<Modal
		handleCloseModal={() => handlerClose()}
		title={`Save spent time on ticket : ${titleHeading}`}
	>
		<Dropdown bind:value={activeIssue.status.id} items={statuses} />
		{#if errors?.date}
			<p class="TrackTimeModal__error-message">{errors.date.message}</p>
		{/if}
		<Input bind:value={dateSpent} type="date" placeholder="Date spent: " />
		{#if errors?.timeSpent}
			<p class="TrackTimeModal__error-message">{errors.timeSpent.message}</p>
		{/if}
		<Input bind:value={timeSpent} type="number" placeholder="Time spent: (Hours) " />
		<Input bind:value={comment} isTextArea={true} placeholder="Comment: " />
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
