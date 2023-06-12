<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Input from '$lib/components/Input.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import TicketItem from '$lib/components/TicketItem.svelte';
	import UserBar from '$lib/components/UserBar.svelte';
	import { user } from '$lib/stores/UserStore';
	import { getIssues } from '$lib/services/apiService';

	$: issues = [];
	$: activeIssue = null;

	const handleActiveIssue = (issue) => (activeIssue = issue);

	onMount(async function () {
		const STORAGE_KEY = 'savedAuthData';
		const isBrowser = typeof window !== 'undefined';
		const data = isBrowser ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;
		if (isBrowser && !data) {
			goto('/login');
		} else {
			await user.set({ isLoggedIn: true, ...data });
		}
		issues = await getIssues(data.localApiKey);
	});
</script>

<div>
	<UserBar />

	<!-- <div>
		<Input />
	</div> -->
	<div class="dashboard">
		<div class="dashboard-stack">
			{#each issues as issue}
				<TicketItem handler={() => handleActiveIssue(issue)} {issue} />
			{/each}
		</div>
		<div class="dashboard-selected">
			{#if activeIssue}
				<div>{activeIssue.subject}</div>
				<div>{activeIssue.project.name}</div>
				<Timer />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../node_modules/destyle.css/destyle.css';

	.dashboard {
		display: grid;
		grid-template-columns: 60% 40%;

		&-stack {
			width: 100%;
		}

		&-selected {
			width: 100%;
		}
	}
</style>
