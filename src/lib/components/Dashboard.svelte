<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import TicketList from '$lib/components/TicketList.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import TrackTimeModal from '$lib/components/Modals/TrackTimeModal.svelte';
	import TicketDetails from './Modals/TicketDetails.svelte';
	import TicketTimeEntries from './Modals/TicketTimeEntries.svelte';
	import { getIssues, getIssue } from '$lib/services/apiService';
	import TimerStore from '../stores/TimerStore';
	import Pagination from './Pagination.svelte';

	let loading = null;
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
			updateIssues();
			prevcurrentPage = currentPage;
		}
	}

	onMount(async () => {
		prevcurrentPage = currentPage;

		await updateIssues();
		if ($TimerStore.taskId) {
			activeIssue = issues.find((item) => item.id === $TimerStore.taskId);
			timerValue = TimerStore.getTime();
		}
	});

	const clearTimerSession = () => {
		showPopup = false;
		popupMessage = '';
		timerValue = null;
	};

	const updateIssues = async () => {
		loading = true;
		let resultIssue = null;
		paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
		const response = await getIssues($userData.localApiKey, paginacationOffset, itemsPerPage);
		resultIssue = response.issues;

		const issuePromises = resultIssue.map((issue) => getIssue($userData.localApiKey, issue.id));
		const issueResponses = await Promise.all(issuePromises);

		resultIssue.forEach((issue, index) => {
			issue.spent_time = issueResponses[index].issue.spent_hours;
		});

		issues = resultIssue;
		paginationPagesCount = Math.ceil(response.total_count / itemsPerPage);
		loading = false;
	};

	const handleActiveIssue = (issue) => {
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
		showPopup = true;
		popupMessage = message;
		activeIssue = null;
		await updateIssues($userData.localApiKey);

		setTimeout(() => {
			clearTimerSession();
		}, 3000);
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
	{#if loading}
		<Loading />
	{:else}
		<div class="dashboard__wrapper">
			<div class="dashboard__list-wrapper">
				<TicketList
					handler={handleActiveIssue}
					{toggleTicketDetails}
					{toggleTicketTimeEntries}
					{issues}
					activeItemId={activeIssue?.id || null}
				/>

				{#if paginationPagesCount > 1}
					<Pagination bind:currentPage totalPages={paginationPagesCount} {itemsPerPage} />
				{/if}
			</div>

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
	{/if}
</div>

<Popup isShow={showPopup} title="Notification" text={popupMessage} />

<style lang="scss">
	.dashboard {
		padding-top: 30px;

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
