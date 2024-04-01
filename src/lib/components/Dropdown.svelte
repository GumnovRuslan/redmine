<script>
	export let items;
	export let value;
	export let placeholder = '';
	export let handlerChange = ''
	export let statusColor = {}
	export let style = false
</script>

<label class="field">
	{#if placeholder}
		<span class="field__label">{placeholder}</span>
	{/if}
	<select class="field__input"
	class:field__input--second={style == 'second'}
	style:background={statusColor[value]?.[0] ?? '#fff'}
	style:color={statusColor[value]?.[1] ?? '#000'}
	bind:value
	on:click|stopPropagation={(e) => {}}
	on:change={handlerChange}>
		{#each items as { id, name }}
			<option class="field__input-item" value={id}>{name}</option>
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
			appearance: auto;
			-webkit-appearance: auto;
			font-weight: 500;

			&:focus,
			&:active {
				outline: 0;
			}

			&--second {
				border-radius: 10px;
			}
		}

		&__input-item {
			background: #fefefd;
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
