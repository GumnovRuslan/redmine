<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: 1024px;
		margin-left: auto;
		margin-right: auto;
		width: 100%;

		@media (max-width: 1023.02px) {
			padding: 0 20px;
		}

		@media (min-width: 1024px) {
			padding: 0 32px;
		}
	}
</style>
