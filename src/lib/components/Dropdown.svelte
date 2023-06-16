<script>
	export let items;
	export let value;
	export let placeholder = 'Placeholder';
</script>

<label class="field">
	<span class="field__label">{placeholder}</span>
	<select class="field__input" bind:value>
		{#each items as { id, name }}
			<option value={id}>{name}</option>
		{/each}
	</select>
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
