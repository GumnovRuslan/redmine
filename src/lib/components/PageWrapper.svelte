<div class="page-wrapper">
	<slot />
</div>

<style lang="scss">
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;

		@media (max-width: 1023.02px) {
			margin: 25px 0;
			margin-bottom: 230px;
		}

		@media (min-width: 1024px) {
			margin: 50px 0;
		}
	}
</style>
