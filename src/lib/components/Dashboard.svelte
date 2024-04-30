<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import TicketList from '$lib/components/TicketList.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import TrackTimeModal from '$lib/components/Modals/TrackTimeModal.svelte';
	import TicketDetails from './Modals/TicketDetails.svelte';
	import TicketTimeEntries from './Modals/TicketTimeEntries.svelte';
	import { getIssues, getIssue, getMemberships, getStatuses} from '$lib/services/apiService';
	import TimerStore from '$lib/stores/TimerStore';
	import Pagination from '$lib/components/Pagination.svelte';
	import {availableStatusesForRole} from '../services/getAvailableStatuses'


	export let statusBull
	export let filterId =  0

	let currentId = null

	let loading = false;
	let timerValue = null;
	let popupMessage = '';
	let isShowingTicketDetails = false;
	let isShowingTicketTimeEntries = false;

	$: issues = [];
	$: activeIssue = null;
	$: activeIssueModal = null;
	$: showPopup = false;
	$: isShowingModal = false;
	$: timeSpent = timerValue ? (timerValue / (1000 * 60 * 60)).toFixed(3) : null;

	const itemsPerPage = 6;
	let currentPage = 1;
	let prevcurrentPage = null;
	let paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
	$: paginationPagesCount = 0;

	$: {
		if (!!prevcurrentPage && currentPage != prevcurrentPage) {
			updateIssues(filterId);
			prevcurrentPage = currentPage;
		} else if(currentId) {
			currentPage = 1
			updateIssues(filterId);
		} else if(statusBull) {}
		currentId = 1
	}

	onMount(() => {
		if (localStorage?.timer) getIssueActive()
		updateDashboard()
	});

	async function getIssueActive() {
		const activityIssueId = JSON.parse(localStorage.timer).taskId
		const result = await getIssue($userData.localApiKey, activityIssueId)
		activeIssue = result.issue
		const statusesPromise = await getAvailableStatuses($userData.localApiKey, activeIssue)
		const issueStatusesResponse = await Promise.all(statusesPromise);
		activeIssue.available_statuses = issueStatusesResponse
	}

	async function updateDashboard() {
		prevcurrentPage = currentPage;
		// await updateIssues(filterId);
		if ($TimerStore.taskId) {
			activeIssue = issues.find((item) => item.id === $TimerStore.taskId);
			timerValue = TimerStore.getTime();
		}
	}

	const clearTimerSession = () => {
		showPopup = false;
		popupMessage = '';
		timerValue = null;
	};

	const updateIssues = async () => {
		console.log('update')
		loading = true;
		let resultIssue = null;
		paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
		const response = await getIssues($userData.localApiKey, paginacationOffset, itemsPerPage, filterId);
		resultIssue = response.issues;

		const issuePromises = resultIssue.map((issue) => getIssue($userData.localApiKey, issue.id));
		const issueResponses = await Promise.all(issuePromises);
		const statusesPromises = resultIssue.map(issue => getAvailableStatuses($userData.localApiKey, issue))
		const issueStatusesResponses = await Promise.all(statusesPromises);

		resultIssue.forEach((issue, index) => issue.spent_time = issueResponses[index].issue.spent_hours);
		resultIssue.forEach((issue, i) => issue.available_statuses = issueStatusesResponses[i])

		issues = resultIssue;
		paginationPagesCount = Math.ceil(response.total_count / itemsPerPage);
		loading = false;
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
		return allStatuses.map(id => statusesTrue.find(status => status.id == id))
	}

	const handleActiveIssue = (issue) => {
		// console.log(timeSpent)
		// console.log(issue?.id)
		// console.log(activeIssue?.id)
		if (!!timeSpent && issue?.id != activeIssue?.id) {
			const confirmText =
				'Switching ticket clear an existing timer, are you sure you want to switch?';

			if (confirm(confirmText)) {
				activeIssue = issue;
				clearTimerSession();
				TimerStore.clear();
				return true;
			}
			return false;
		} else {
			activeIssue = issue;
			return true;
		}
	};

	const handleCreateTimeEntry = async (message) => {
		timerValue = 0;
		activeIssue = null;
		await updateIssues($userData.localApiKey);
	};

	const toggleTicketDetails = async (issue) => {
		isShowingTicketDetails = !isShowingTicketDetails;
		activeIssueModal = issue;
	};

	const toggleTicketTimeEntries = async (issue) => {
		isShowingTicketTimeEntries = !isShowingTicketTimeEntries;
		activeIssueModal = issue;
	};

	const toggleShowingModal = () => {
		isShowingModal = !isShowingModal;
	};
</script>

<div class="dashboard">
	<div class="dashboard__wrapper">
			{#if loading}
				<Loading />
			{:else}
				{#if !issues.length || loading}
					<p class='dashboard__message'>no result</p>
				{:else}
					<div class="dashboard__list-wrapper">
							<TicketList
								handler={handleActiveIssue}
								{toggleTicketDetails}
								{toggleTicketTimeEntries}
								{issues}
								activeItemId={activeIssue?.id || null}
							/>

							{#if paginationPagesCount > 1}
								<Pagination bind:currentPage totalPages={paginationPagesCount} />
							{/if}
					</div>
				{/if}
			{/if}
			<div class='dashboard__timer'>
				{#if activeIssue}
					<Timer
						activeIssueName={activeIssue.subject}
						activeIssueId={activeIssue.id}
						bind:time={timerValue}
						handle={toggleShowingModal}
					/>
				{/if}

				{#if activeIssue && isShowingModal}
					<TrackTimeModal
						handler={handleCreateTimeEntry}
						handlerClose={toggleShowingModal}
						titleHeading={activeIssue.subject}
						{timeSpent}
						{activeIssue}
					/>
				{/if}

				{#if activeIssueModal && isShowingTicketDetails}
					<TicketDetails
						titleHeading="Issue details"
						issueId={activeIssueModal.id}
						handlerClose={toggleTicketDetails}
					/>
				{/if}

				{#if activeIssueModal && isShowingTicketTimeEntries}
					<TicketTimeEntries
						titleHeading="Ticket time entries"
						issueId={activeIssueModal.id}
						handlerClose={toggleTicketTimeEntries}
					/>
				{/if}
			</div>
	</div>
</div>

<style lang="scss">
	.dashboard {

		&__wrapper {
			display: grid;

			@media (max-width: 1023.02px) {
				grid-template-columns: 1fr;
			}

			@media (min-width: 1024px) {
				grid-template-columns: 70% 25%;
				gap: 5%;
			}
		}

		&__list-wrapper {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}
</style>
