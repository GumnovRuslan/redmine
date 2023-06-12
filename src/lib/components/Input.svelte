<script>
	export let value = '';
	export let placeholder = 'Placeholder';
	export let type = 'text';

	function typeAction(node) {
		node.type = type;
	}
</script>

<label>
	<input use:typeAction bind:value placeholder="" />
	<span>{placeholder}</span>
</label>

<style lang="scss">
	label {
		position: relative;
		display: flex;
		flex-direction: column;
	}
	input {
		height: 30px;
		&:focus + span,
		&:not(:placeholder-shown) + span {
			top: -7px;
			transform: translateY(-100%);
		}
	}
	span {
		transition: 0.3s;
		position: absolute;
		top: 47%;
		left: 5px;
		line-height: 16px;
		font-size: 16px;
		transform: translateY(-50%);
	}
</style>
