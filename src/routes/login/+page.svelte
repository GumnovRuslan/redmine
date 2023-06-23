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
		if (res.id) {
			userData.set({ isLoggedIn: true, ...res });
			isBrowser && localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
			goto('/');
		} else {
			error = true;
		}
	};
</script>

<div class="login">
	<div class="login__wrapper">
		<div class="login__form">
			<Text tag="h1" label="Log in" />
			<div class="login__form-content">
				{#if loginViaApiKey}
					<Input bind:value={apiKey} placeholder="api key" />
				{:else}
					<Input bind:value={username} placeholder="username" />
					<Input bind:value={password} placeholder="password" type="password" />
				{/if}

				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="login__form-toggle">
					<Text color="#7f818b" tag="span" label="login using apiKey?" />
					<Checkbox bind:checked={loginViaApiKey} />
				</label>

				<Button label="Login" handle={handleLogin} />
				{#if error}
					<Text
						tag="span"
						styleProps="text-align: center; font-size: 14px; font-weight: 500;"
						color="red"
						label="User not found. Check your login data"
					/>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../lib/global.css';

	.login {
		width: 400px;
		margin: auto;
		flex-direction: column;
		align-items: center;
		height: 90vh;
		display: flex;
		justify-content: center;

		&__wrapper {
			width: 100%;
		}

		&__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 50px;
		}

		&__form-content {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		&__form-toggle {
			width: fit-content;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 10px;

			font-size: 14px;
			font-weight: 500;
		}
	}
</style>
