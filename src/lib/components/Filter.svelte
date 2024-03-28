<script>
    import FilterItem from "./FilterItem.svelte";

    import { id_global } from '../stores/filterStore.js';
    let filterArr = [
        {
            name: 'All',
            id: 0,
        },
        {
            name: 'To do',
            id: 1,
        },
        {
            name: 'In Progress',
            id: 2,
        },
        {
            name: 'Closed',
            id: 5,
        },
        {
            name: 'QA',
            id: 4,
        },
        {
            name: 'Resolved',
            id: 3,
        },
        {
            name: 'Estimate',
            id: 8,
        },
    ]

    let countValue;

	const unsubscribe = id_global.subscribe((value) => {
		countValue = value;
	});


</script>

<div class='filter'>
    <div class='filter__items'>
        {#each filterArr as item}
            <FilterItem {...item} value={countValue}/>
        {/each}
    </div>

</div>

<style lang="scss">
    .filter {

        &__items {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
    }
</style>
