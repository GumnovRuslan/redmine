<script>
	import { id_global } from '../stores/filterStore.js';

    export let name
    export let id
    export let value

</script>

<button
    class='filter__item'
    class:active={id == value}
    type="button"
    value={id}
    on:click={() => id_global.update((value) => value = id)}>
    {name}
</button>

<style lang="scss">

    .filter__item {
            text-wrap: nowrap;
            font-weight: 500;
            border:  1px solid #d6d6d6;
            border-radius: 10px;
            padding: 10px 20px;
            background: #fefefd;
            transition: 0.2s;

            &:hover {
                background: #f5f5f5;
            }
        }
    .active {
            border-bottom: 1px solid red;
        }
</style>
