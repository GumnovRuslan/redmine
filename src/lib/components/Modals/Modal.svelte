<script>
	export let title;
	export let handleCloseModal = () => {};
</script>

<div class="modal">
	<div class="modal__wrapper">
		<div class="modal__heading">
			<div class="modal__title">{title}</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={handleCloseModal} class="modal__icon" />
		</div>
		<div class="modal__inner-wrapper">
			<div class="modal__content">
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
			padding: 25px;
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 12px;
		}

		&__inner-wrapper {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		&__controls {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding: 50px 0;
		}

		&__heading {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 50px;
		}

		&__title {
			font-weight: 700;
			font-size: 20px;
			line-height: 27px;
			color: #000000;
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
