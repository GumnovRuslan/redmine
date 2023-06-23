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
		transition: 0.3s ease-in-out;
		cursor: pointer;

		font-weight: 700;
		font-size: 16px;
		line-height: 22px;
		color: #9095a1;

		border-radius: 12px;
		border: 1px solid #d6d6d6;
		background: #fefefd;
		box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);

		&.hoverRed {
			&:hover {
				background: #ff6d6b;
				color: white;
			}
		}

		&:not(&.hoverRed) {
			&:hover {
				background: #e8f0fc;
				color: #428ded;
			}
		}
	}
</style>
