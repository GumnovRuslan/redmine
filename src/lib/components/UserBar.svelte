<script>
	import Button from './Button.svelte';
	import userData from '$lib/stores/UserStore';

	function handleButtonLogout() {
		const STORAGE_KEY = 'savedAuthData';
		localStorage.removeItem(STORAGE_KEY);
		userData.set({});
		window.location.href = '/login';
	}
</script>

{#if $userData.firstname}
	<section class="userbar">
		<div class="userbar__wrapper">
			<div class="userbar__content">
				<p class="userbar__title">{$userData.firstname} {$userData.lastname}</p>
				<p class="userbar__text">{$userData.mail}</p>
			</div>
			<Button variant="hoverRed" label="Log out" handle={handleButtonLogout} />
		</div>
	</section>
{/if}

<style lang="scss">
	.userbar {
		&__wrapper {
			display: flex;

			justify-content: space-between;
			padding: 25px;
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 12px;

			@media (max-width: 1023.02px) {
				gap: 20px;
				flex-wrap: wrap;
			}

			@media (min-width: 1024px) {
				align-items: center;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		&__title {
			font-weight: 700;
			color: #000000;

			@media (max-width: 1023.02px) {
				font-size: 16px;
				line-height: 20px;
			}

			@media (min-width: 1024px) {
				font-size: 20px;
				line-height: 27px;
			}
		}

		&__text {
			font-weight: 500;
			color: #7f818b;

			@media (max-width: 1023.02px) {
				font-size: 14px;
				line-height: 1 6px;
			}

			@media (min-width: 1024px) {
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
</style>
