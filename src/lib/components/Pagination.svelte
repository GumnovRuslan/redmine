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
	<button
		class="pagination__btn prev {currentPage === 1 ? 'disabled' : ''}"
		on:click={() => goToPage(currentPage - 1)}
	>
		<span>
			<img src="/icons/arrow.svg" alt="" />
		</span>
	</button>

	<div class="pagination__list">
		{#if currentPage > 3}
			<button class="pagination__btn" on:click={() => goToPage(1)}>1</button>
			<button class="pagination__btn">...</button>
		{/if}

		{#each range(Math.max(1, currentPage - 1), Math.min(currentPage + 1, totalPages)) as page}
			<button
				class={'pagination__btn ' + (page === currentPage ? 'active' : '')}
				on:click={() => goToPage(page)}>{page}</button
			>
		{/each}

		{#if currentPage < totalPages - 1}
			<button class="pagination__btn">...</button>
			<button class="pagination__btn" on:click={() => goToPage(totalPages)}>{totalPages}</button>
		{/if}
	</div>

	<button
		class="pagination__btn next {currentPage === totalPages ? 'disabled' : ''}"
		on:click={() => goToPage(currentPage + 1)}
	>
		<span>
			<img src="/icons/arrow.svg" alt="" />
		</span>
	</button>
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

		&__btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			cursor: pointer;
			background: #f4f4f5;
			border-radius: 6px;
			padding: 5px;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			font-weight: 700;
			font-size: 16px;
			line-height: 0px;
			color: #9095a1;

			span {
				width: 15px;
				height: 15px;
				display: flex;
				margin-inline-end: 2px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			&.next {
				transform: rotate(180deg);
			}

			&.active {
				background: #e8f0fc;
				color: #428ded;
			}

			&.disabled {
				cursor: default;
				opacity: 0.6;
				pointer-events: none;
			}
		}
	}
</style>
