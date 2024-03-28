<script>
	import { onMount, beforeUpdate } from 'svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Container from '$lib/components/Container.svelte';
	import UserBar from '$lib/components/UserBar.svelte';
	import userData from '$lib/stores/UserStore';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import Filter from '$lib/components/Filter.svelte'
	import {id_global} from '../lib/stores/filterStore.js'
	import {statusIsChange} from '$lib/stores/statusStore.js';


	let filterId = 0;
	let statusChange = false

	id_global.subscribe(value => filterId = value);
	$: filterID = filterId

	statusIsChange.subscribe(value => statusChange = value)
	$: statusBull = statusChange

</script>

<PageWrapper>
	<Container>
		{#if $userData.isLoggedIn}
			<UserBar />
			<Filter />
			<Dashboard filterId={filterID} {statusBull}/>
		{/if}
	</Container>
</PageWrapper>

<style lang="scss">
	@import '../../node_modules/destyle.css/destyle.css';
	@import '../lib/global.css';
</style>
