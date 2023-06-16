<script>
	export let variant = '';
	export let label = '';
	export let handle = () => {};
</script>

<button class="button {variant}" on:click={handle}>{label}</button>

<style lang="scss">
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 18px;
		background: #f4f4f5;
		border-radius: 24px;
		transition: 0.3s ease-in-out;

		font-weight: 700;
		font-size: 16px;
		line-height: 22px;
		color: #9095a1;

		&.hoverRed {
			&:hover {
				background: #ff6d6b;
				color: white;
			}
		}

		&:not(&.hoverRed) {
			&:hover {
				background: #c3c3c4;
			}
		}
	}
</style>
