<script>
	import Container from './Container.svelte';
	import Button from './Button.svelte';
	import userData from '$lib/stores/UserStore';

	function handleButtonLogout() {
		const STORAGE_KEY = 'savedAuthData';
		localStorage.removeItem(STORAGE_KEY);
		userData.set({});
		window.location.href = '/login';
	}
</script>

<Container>
	<section class="userbar">
		<div class="userbar__wrapper">
			<div class="userbar__content">
				<p class="userbar__title">{$userData.firstname} {$userData.lastname}</p>
				<p class="userbar__text">{$userData.mail}</p>
			</div>
			<Button variant="hoverRed" label="Logout" handle={handleButtonLogout} />
		</div>
	</section>
</Container>

<style lang="scss">
	.userbar {
		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 25px;
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 12px;
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		&__title {
			font-weight: 700;
			font-size: 20px;
			line-height: 27px;
			color: #000000;
		}

		&__text {
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
			color: #7f818b;
		}
	}
</style>
