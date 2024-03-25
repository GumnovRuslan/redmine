<script>
	import PageWrapper from '../lib/components/PageWrapper.svelte';
	import Container from '../lib/components/Container.svelte';
	import UserBar from '../lib/components/UserBar.svelte';
	import userData from '../lib/stores/UserStore';
	import Dashboard from '../lib/components/Dashboard.svelte';
</script>

<PageWrapper>
	<Container>
		{#if $userData.isLoggedIn}
			<UserBar />
			<Dashboard />
		{/if}
	</Container>
</PageWrapper>

<style lang="scss">
	@import '../../node_modules/destyle.css/destyle.css';
	@import '../lib/global.css';
</style>
