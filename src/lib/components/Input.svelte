<script>
	export let type = 'text';
	export let value = type === 'date' ? dateNow() : '';
	export let placeholder = 'Placeholder';

	function typeAction(node) {
		node.type = type;
	}

	function dateNow() {
		const currentDate = new Date();
		var formattedDate = currentDate.toISOString().split('T')[0];
		return formattedDate;
	}
</script>

<label class="field">
	<span class="field__label">{placeholder}</span>
	<input class="field__input" use:typeAction bind:value/>
</label>

<style lang="scss">
	.field {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;
		&__input {
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 5px;
			padding: 5px 10px;

			&:focus,
			&:active {
				outline: 0;
			}
		}

		&__label {
			font-weight: 600;
			font-size: 14px;
			line-height: 16px;
			color: #9095a1;
			line-height: 16px;
			font-size: 16px;
		}
	}
</style>
