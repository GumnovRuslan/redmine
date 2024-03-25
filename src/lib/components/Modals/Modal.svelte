<script>
	import { onMount, onDestroy } from 'svelte';
	export let title;
	export let modalContentFlex = true;
	export let handleCloseModal = () => {};

	onMount(() => {
		document.querySelector('body').style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.querySelector('body').style.overflow = 'auto';
	});
</script>

<div class="modal">
	<div class="modal__wrapper">
		<div class="modal__heading">
			<div class="modal__heading-content">
				<div class="modal__title">{title}</div>
				<div class="modal__heading-slot">
					<slot name="heading-content" />
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={handleCloseModal} class="modal__icon" />
		</div>
		<div class="modal__inner-wrapper">
			<div class:modal__content={modalContentFlex}>
				<slot />
			</div>
			<div class="modal__controls">
				<slot name="controls" />
			</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={handleCloseModal} class="modal__backdrop" />
</div>

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;

		@media (max-width: 1023.02px) {
			padding: 10px;
		}

		@media (min-width: 1024px) {
			padding: 50px;
		}

		&__backdrop {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #00000029;
			z-index: -1;
		}

		&__wrapper {
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 12px;
			max-width: 1024px;
			height: fit-content;
			max-height: 100%;

			@media (max-width: 1023.02px) {
				padding: 15px 5px 15px 15px;
			}

			@media (min-width: 1024px) {
				padding: 25px 10px 25px 25px;
			}
		}

		&__inner-wrapper {
			display: flex;
			flex-direction: column;
			max-height: 70vh;
			overflow: auto;

			@media (max-width: 1023.02px) {
				padding-right: 10px;
				gap: 10px;
			}

			@media (min-width: 1024px) {
				padding-right: 15px;
				gap: 20px;
			}
		}

		&__controls {
			display: flex;
			flex-direction: column;

			@media (max-width: 1023.02px) {
				gap: 10px;
			}

			@media (min-width: 1024px) {
				gap: 15px;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;

			@media (max-width: 1023.02px) {
				gap: 10px;
				padding: 20px 0;
			}

			@media (min-width: 1024px) {
				gap: 20px;
				padding: 35px 0;
			}
		}

		&__heading {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media (max-width: 1023.02px) {
				gap: 25px;
				padding-bottom: 15px;
				padding-right: 10px;
			}

			@media (min-width: 1024px) {
				gap: 50px;
				padding-bottom: 25px;
				padding-right: 15px;
			}
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

		&__icon {
			cursor: pointer;
			position: relative;
			width: 15px;
			height: 15px;

			&::after,
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 100%;
				height: 2px;
				background: black;
			}

			&::after {
				transform: translate(-50%, -50%) rotate(45deg);
			}

			&::before {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
		}
	}
</style>
