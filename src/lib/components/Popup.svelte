<script>
	import { popupStore } from '../stores/popupStore.js'
	export let isShow;
	export let title = '';
	export let text = '';
	export let time = 3000

	$: {
		if(isShow) {
			setTimeout(() => {
				popupStore.set({
					isShow: false,
					title: '',
					text: ''
				})
			}, time);

		}
	}
</script>

<div class="popup" class:active={isShow}>
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
		border-radius: 12px;
		background: #428ded;
		color: white;
		padding: 15px 30px;
		transform: translate(-50%);
		transition: 0.3s ease;
		visibility: hidden;
		opacity: 0;

		&.active {
			top: 20px;
			visibility: visible;
			opacity: 1;
		}

		&:not(&.active) {
			top: -10vh;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__title {
			text-transform: uppercase;
			font-weight: 700;
			font-size: 14px;
			line-height: 14px;
		}

		&__text {
			font-size: 14px;
			line-height: 16px;
			margin-top: 20px;
		}
	}
</style>
