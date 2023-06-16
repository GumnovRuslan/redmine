<script>
	export let currentPage;
	export let totalPages;

	function range(start, end) {
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}

	function goToPage(page) {
		currentPage = page;
	}
</script>

<div class="pagination">
	<button disabled={currentPage === 1} on:click={() => goToPage(currentPage - 1)}>←</button>
	<div class="pagination__list">
		{#if currentPage > 3}
			<button on:click={() => goToPage(1)}>1</button>
			<button>...</button>
		{/if}

		{#each range(Math.max(1, currentPage - 1), Math.min(currentPage + 1, totalPages)) as page}
			<button class={page === currentPage ? 'active' : ''} on:click={() => goToPage(page)}
				>{page}</button
			>
		{/each}

		{#if currentPage < totalPages - 1}
			<button>...</button>
			<button on:click={() => goToPage(totalPages)}>{totalPages}</button>
		{/if}
	</div>
	<button disabled={currentPage === totalPages} on:click={() => goToPage(currentPage + 1)}>→</button
	>
</div>

<style lang="scss">
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
		gap: 30px;

		&__list {
			display: flex;
			align-items: center;
			gap: 5px;
		}

		button {
			width: 30px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 6px;
			border: 2px solid #1d2a66;

      &:disabled {
        opacity: 0.3;
      }
		}
	}
	.active {
		font-weight: bold;
    background: #1d2a66;
    color: white;
	}
</style>
