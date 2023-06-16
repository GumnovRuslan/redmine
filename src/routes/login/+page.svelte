<script>
	import { goto } from '$app/navigation';
	import Text from '$lib/components/Text.svelte';
	import Input from '$lib/components/Input.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';
	import userData from '$lib/stores/UserStore';
	import { getUserCred } from '$lib/services/apiService';

	let error = false;
	let username = '';
	let password = '';
	let apiKey = '';
	let loginViaApiKey = false;

	const STORAGE_KEY = 'savedAuthData';
	const isBrowser = typeof window !== 'undefined';
	

	const data = isBrowser ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;

	if (isBrowser && data) {
		userData.set({ isLoggedIn: true, ...data });
		goto('/');
	}

	const handleLogin = async () => {
		error = false;
		const res = await getUserCred(username, password, apiKey);
		if(res.id) {
			userData.set({ isLoggedIn: true, ...res });
			isBrowser && localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
			goto('/');
		}else{
			error = true;
		}
	};
</script>

<div class="container">
	<Text tag="h1" label="Log in" />

	<form>
		{#if loginViaApiKey}
			<Input bind:value={apiKey} placeholder="api key" />
		{:else}
			<Input bind:value={username} placeholder="username" />
			<Input bind:value={password} placeholder="password" type="password" />
		{/if}

		<div>
			<Text tag="span" label="login using apiKey?" />
			<Checkbox label="use apiKey" bind:checked={loginViaApiKey} />
		</div>

		<Button label="Login" handle={handleLogin} />
		{#if error}
			<Text tag="span" color='red' label='User not found. Check your login data' />
		{/if}

	</form>
</div>

<style lang="scss">
	.container {
		width: 400px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	form {
		width: 100%;
		display: grid;
		gap: 25px;
		justify-items: stretch center;
	}
</style>
