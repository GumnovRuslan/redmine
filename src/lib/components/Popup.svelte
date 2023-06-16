<script>
	export let isShow;
	export let title = '';
	export let text = '';
</script>

<div class="popup {isShow ? 'active' : ''}">
	<div class="popup__wrapper">
		<div class="popup__title">{title}</div>
		<div class="popup__text">{text}</div>
	</div>
</div>

<style lang="scss">
	.popup {
		position: fixed;
		left: 50%;
		width: fit-content;
		padding: 20px;
		z-index: 1000;
		background: white;
		border-radius: 12px;
		box-shadow: 0 0 8px 2px #ebebeb;
		transform: translate(-50%);
		transition: .3s ease;

		&.active {
			top: 20px;
		}

		&:not(&.active){
			top: -10vh;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}

		&__title {
			text-transform: uppercase;
			font-weight: 700;
		}

		&__text {
		}
	}
</style>
