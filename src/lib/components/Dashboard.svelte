<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import TicketList from '$lib/components/TicketList.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import TrackTimeModal from '$lib/components/Modals/TrackTimeModal.svelte';
	import TicketDetails from './Modals/TicketDetails.svelte';
	import TicketTimeEntries from './Modals/TicketTimeEntries.svelte';
	import { getIssues } from '$lib/services/apiService';

	let popupMessage = '';
	let isShowingTicketDetails = false;
	let isShowingTicketTimeEntries = false;

	$: issues = [];
	$: activeIssue = null;
	$: activeIssueModal = null;
	$: showPopup = false;
	$: isShowingModal = false;

	onMount(() => {
		updateIssues();
	});

	let timerValue = 0;
	$: timeSpent = (timerValue / (1000 * 60 * 60)).toFixed(3);

	const clearTimerSession = () => {
		showPopup = false;
		popupMessage = '';
		timerValue = 0;
	};

	const updateIssues = async () => {
		issues = await getIssues($userData.localApiKey);
	};

	const handleActiveIssue = (issue) => {
		if (timeSpent != 0 && issue.id != activeIssue.id) {
			const confirmText =
				'Switching ticket clear an existing timer, are you sure you want to switch?';

			if (confirm(confirmText)) {
				activeIssue = issue;
				clearTimerSession();
			}
		} else {
			activeIssue = issue;
		}
	};

	const handleCreateTimeEntry = async (message) => {
		timerValue = 0;
		showPopup = true;
		popupMessage = message;
		const issues = await updateIssues($userData.localApiKey);

		console.log('issues - > ', issues);

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
	<div class="dashboard__wrapper">
		<TicketList
			handler={handleActiveIssue}
			{toggleTicketDetails}
			{toggleTicketTimeEntries}
			{issues}
		/>

		{#if activeIssue}
			<Timer
				activeIssueName={activeIssue.subject}
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

<!-- <Popup isShow={showPopup} title="Notification" text={popupMessage} /> -->
<style lang="scss">
	.dashboard {
		padding-top: 30px;

		&__wrapper {
			display: grid;
			grid-template-columns: 70% 25%;
			gap: 5%;
		}
	}
</style>
