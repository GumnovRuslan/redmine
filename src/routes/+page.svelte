<script>
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Container from '$lib/components/Container.svelte';
	import UserBar from '$lib/components/UserBar.svelte';
	import userData from '$lib/stores/UserStore';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import Filter from '$lib/components/Filter.svelte'
	import {id_global} from '../lib/stores/filterStore.js'
	import {statusIsChange} from '../lib/stores/statusStore.js';
	import {popupStore} from '../lib/stores/popupStore.js'
	import Popup from '$lib/components/Popup.svelte';


	let filterId = 0;
	let statusChange = false

	let popupData = {
		isShow: false,
		title: '',
		text: ''
	}

	id_global.subscribe(value => filterId = value);
	$: filterID = filterId

	statusIsChange.subscribe(value => statusChange = value)
	$: statusBull = statusChange

	popupStore.subscribe(popup => popupData = popup)
	$: popupIsChange = popupData

</script>

<PageWrapper>
	<Container>
		{#if $userData.isLoggedIn}
			<UserBar />
			<Filter />
			<Dashboard filterId={filterID} {statusBull}/>
		{/if}
		<Popup {...popupIsChange}/>
	</Container>
</PageWrapper>

<style lang="scss">
	@import '../../node_modules/destyle.css/destyle.css';
	@import '../lib/global.css';
</style>
