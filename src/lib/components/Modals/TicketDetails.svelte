<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	// import { getEntryActivities, setTimeEntries } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	export let titleHeading = '';
	export let handlerClose = () => {};
	export let issue;

	const { localApiKey } = $userData;

	console.log('1- >>>>>',issue);

	onMount(async function () {

	});
</script>

<Modal handleCloseModal={handlerClose} title={titleHeading}>

</Modal>
